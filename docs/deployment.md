# Публикация тэн-мастер.рф

Контейнер собирает Vite с pnpm 10.34.3 и раздаёт `dist` через Nginx на порту 8080. Поддерживаются маршруты SPA, проверки `/healthz` и кеширование файлов `/assets/`.

## Подготовка инфраструктуры

1. Загрузите проект в GitHub. Workflows рассчитаны на ветку `main`; измените её при необходимости.
2. Подготовьте Kubernetes и установленный Ingress controller. Узнайте имя его IngressClass. API Kubernetes должен быть доступен с GitHub runner; для закрытого кластера используйте собственный runner.
3. Направьте DNS A-запись домена `тэн-мастер.рф` (`xn----8sbp0adwfdf8h.xn--p1ai`) на внешний IPv4 Ingress. AAAA добавляйте только при доступном IPv6. Для сертификата должны быть доступны нужные ACME challenge endpoints.
4. TLS настроен как в проекте `roofing`: Traefik использует entrypoint `websecure` и ACME resolver `myresolver`. Resolver должен быть настроен в самом Traefik; chart его не создаёт. Traefik автоматически выпускает и обновляет сертификат для домена, отдельный TLS Secret и cert-manager не требуются. Настройте перенаправление HTTP → HTTPS средствами Traefik.
5. Создайте GitHub Environment `production` и добавьте secrets `KUBECONFIG` (полный YAML kubeconfig, без Base64), `GHCR_USERNAME` (пользователь GitHub) и `GHCR_PAT` (токен с `read:packages` для образа). Workflow создаёт namespace `ten-master` и Secret `ghcr-pull-secret` автоматически.

## GitHub Actions

Сценарий повторяет `roofing`: `release.yml` → GHCR → `deploy.yml` → K3s через Helm.

`release.yml` публикует образ `ghcr.io/satilian/ten-landing` при push в `main`, push тега `v*.*.*` или ручном запуске. Теги образа: `latest` для основной ветки, `sha-<первые 7 символов SHA>` и версия для Git-тега.

`deploy.yml` автоматически запускает деплой после успешного Release Docker Image основной ветки этого репозитория. Использует chart именно из собранного коммита и его SHA-тег образа. Также доступен ручной запуск с `image_tag` (`latest`, `sha-…` или версия). Дополнительный флаг `DEPLOY_ENABLED` не нужен.

В кластере используются release и namespace `ten-master`, IngressClass `traefik`, домен `xn----8sbp0adwfdf8h.xn--p1ai` и Traefik ACME resolver `myresolver`. Chart сохраняет Nginx на 8080, проверки `/healthz` и две реплики. Helm ждёт готовности и откатывает неудачное обновление. Secrets БД и S3 из roofing этому статическому сайту не нужны.

API Kubernetes должен быть доступен GitHub runner. Kubeconfig должен иметь права на namespace, registry Secret и ресурсы Helm chart. DNS и TLS настраиваются отдельно по шагам выше. После первого деплоя проверьте `https://тэн-мастер.рф`.

`ci.yml` проверяет Helm, сборку контейнера, HTTP, SPA fallback и 404 отсутствующих assets. Сделайте job `validate` обязательной перед merge в `main`.

## Локально

```sh
docker build -t ten-master:local .
docker run --rm --read-only --tmpfs /tmp:uid=101,gid=101 -p 8080:8080 ten-master:local

helm lint helm/ten-master --strict
helm upgrade --install ten-master helm/ten-master --namespace ten-master --create-namespace \
  --set-string image.tag=sha-COMMIT_SHA \
  --set-string 'imagePullSecrets[0].name=ghcr-pull-secret' \
  --atomic --wait --timeout 5m
```

Локальный пример рассчитан на Helm 3; GitHub Actions использует Helm из `azure/setup-helm@v5`, как roofing, с `--rollback-on-failure`. Для локального деплоя Secret `ghcr-pull-secret` уже должен существовать. Ресурсы, реплики и TLS настраиваются в `helm/ten-master/values.yaml`. Для проверки без TLS используйте отдельный values-файл с `ingress.tls.enabled: false` и замените `ingress.annotations` на `{traefik.ingress.kubernetes.io/router.entrypoints: web, traefik.ingress.kubernetes.io/router.tls: "false"}`; аннотацию `traefik.ingress.kubernetes.io/router.tls.certresolver` удалите через значение `null`. Для собственного сертификата укажите `ingress.tls.secretName` и удалите аннотацию certresolver через `null`.

## Метаданные сайта

Индексация разрешена в `.figma/make/site.json`. Настроены русский язык, title и description, canonical и социальные метаданные, JSON-LD с контактами. `public/robots.txt` указывает на `public/sitemap.xml`; sitemap содержит только главную страницу, поскольку разделы сайта используют якоря.

`pnpm build` предварительно рендерит страницу в `dist/index.html`; React подключает интерактивность через hydration. Сервер Node.js в production не нужен. При добавлении самостоятельных страниц обновите sitemap, canonical и схему рендеринга. После публикации добавьте сайт в Яндекс Вебмастер и Google Search Console и отправьте sitemap. Проверьте актуальность адресов и телефона, указанных на странице и в JSON-LD.

Документация: [Docker GitHub Actions](https://docs.docker.com/build/ci/github-actions/), [Kubernetes Ingress и TLS](https://kubernetes.io/docs/concepts/services-networking/ingress/), [Helm upgrade](https://docs.helm.sh/docs/v3/helm/helm_upgrade/).
