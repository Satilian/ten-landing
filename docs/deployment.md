# Публикация тэн-мастер.рф

Контейнер собирает Vite с pnpm 10.34.3 и раздаёт `dist` через Nginx на порту 8080. Поддерживаются маршруты SPA, проверки `/healthz` и кеширование файлов `/assets/`.

## Подготовка инфраструктуры

1. Загрузите проект в GitHub. Workflows рассчитаны на ветку `main`; измените её при необходимости.
2. Подготовьте Kubernetes и установленный Ingress controller. Узнайте имя его IngressClass. API Kubernetes должен быть доступен с GitHub runner; для закрытого кластера используйте собственный runner.
3. Направьте DNS A-запись домена `тэн-мастер.рф` (`xn----8sbp0adwfdf8h.xn--p1ai`) на внешний IPv4 Ingress. AAAA добавляйте только при доступном IPv6. Для сертификата должны быть доступны нужные ACME challenge endpoints.
4. Подготовьте TLS Secret `ten-master-tls` в namespace `ten-master` либо установите cert-manager и готовый ClusterIssuer. Имя issuer передаётся через `TLS_CLUSTER_ISSUER`. Chart не устанавливает controller, cert-manager или issuer. Настройте перенаправление HTTP → HTTPS средствами выбранного controller.
5. Первый опубликованный GHCR package сделайте публичным либо заранее создайте в namespace Secret типа `kubernetes.io/dockerconfigjson` с доступом к GHCR (`read:packages`) и укажите его имя в `IMAGE_PULL_SECRET`. GitHub Token используется для публикации; автоматически в Kubernetes он не передаётся.

## GitHub Actions

`ci.yml` проверяет Helm, собирает Docker image и проверяет HTTP, SPA fallback и 404 для отсутствующих assets. Сделайте job `validate` обязательной проверкой ветки `main`.

`publish.yml` публикует `ghcr.io/<owner>/<repository>:<commit-sha>` при push в `main` или ручном запуске. Kubernetes получает образ по digest. Деплой включается переменной `DEPLOY_ENABLED=true`; до её установки workflow только публикует образ. Job deploy выполняет собственный Helm lint; контейнерные проверки выполняются в CI и должны быть обязательны перед merge.

Создайте GitHub Environment `production` и настройте:

| Тип | Имя | Значение |
| --- | --- | --- |
| Repository variable | `DEPLOY_ENABLED` | `true`, когда инфраструктура готова |
| Environment secret | `KUBE_CONFIG_B64` | kubeconfig в Base64, одной строкой |
| Environment variable | `K8S_NAMESPACE` | `ten-master` по умолчанию |
| Environment variable | `INGRESS_CLASS` | Имя установленного IngressClass |
| Environment variable | `TLS_SECRET` | `ten-master-tls` по умолчанию |
| Environment variable | `TLS_CLUSTER_ISSUER` | Необязательно: имя ClusterIssuer cert-manager |
| Environment variable | `IMAGE_PULL_SECRET` | Необязательно: имя Secret для приватного GHCR |

Используйте отдельные учётные данные Kubernetes с правами для Helm release и ресурсов chart. Если namespace заранее создан и создание namespace запрещено, уберите `--create-namespace`. Не добавляйте kubeconfig и токены в репозиторий. Environment может требовать ручного согласования деплоя по вашим правилам.

Helm ждёт готовности Deployment и откатывает неудачное обновление (`--atomic`). Готовность Pod не подтверждает доступность внешнего DNS или сертификата: после первого деплоя проверьте `https://тэн-мастер.рф`.

## Локально

```sh
docker build -t ten-master:local .
docker run --rm --read-only --tmpfs /tmp:uid=101,gid=101 -p 8080:8080 ten-master:local

helm lint helm/ten-master --set image.repository=ghcr.io/owner/repository --set image.tag=COMMIT_SHA
helm upgrade --install ten-master helm/ten-master --namespace ten-master --create-namespace \
  --set image.repository=ghcr.io/owner/repository --set image.tag=COMMIT_SHA \
  --set ingress.className=YOUR_INGRESS_CLASS --atomic --wait --timeout 5m
```

Параметры ресурсов, количество реплик, annotations и TLS настраиваются в `helm/ten-master/values.yaml` или отдельном values-файле. Для локальной проверки без TLS укажите `--set ingress.tls.enabled=false`.

## Метаданные сайта

Индексация разрешена в `.figma/make/site.json`. Настроены русский язык, title и description, canonical и социальные метаданные, JSON-LD с контактами. `public/robots.txt` указывает на `public/sitemap.xml`; sitemap содержит только главную страницу, поскольку разделы сайта используют якоря.

`pnpm build` предварительно рендерит страницу в `dist/index.html`; React подключает интерактивность через hydration. Сервер Node.js в production не нужен. При добавлении самостоятельных страниц обновите sitemap, canonical и схему рендеринга. После публикации добавьте сайт в Яндекс Вебмастер и Google Search Console и отправьте sitemap. Проверьте актуальность адресов и телефона, указанных на странице и в JSON-LD.

Документация: [Docker GitHub Actions](https://docs.docker.com/build/ci/github-actions/), [Kubernetes Ingress и TLS](https://kubernetes.io/docs/concepts/services-networking/ingress/), [Helm upgrade](https://docs.helm.sh/docs/v3/helm/helm_upgrade/).
