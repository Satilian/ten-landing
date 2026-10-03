import { useState } from "react";

function CoilIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 16C4 16 6 10 10 10C14 10 14 22 18 22C22 22 22 10 26 10C28 10 29 13 29 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="4" cy="16" r="2" fill="currentColor" />
      <circle cx="29" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18C1.61 2.09 2.48 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.53 6.53l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function WrenchIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Категории", href: "#categories" },
  { label: "Ремонт", href: "#repair" },
  { label: "Доставка", href: "#delivery" },
  { label: "Контакты", href: "#contacts" },
];

const CATEGORIES = [
  {
    title: "ТЭНы для водонагревателей",
    subtitle: "Ariston, Thermex, Electrolux и др.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop&auto=format",
    badge: "Хит продаж",
  },
  {
    title: "ТЭНы для электроплит и духовок",
    subtitle: "Bosch, Samsung, Indesit и др.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=260&fit=crop&auto=format",
    badge: null,
  },
  {
    title: "ТЭНы для котлов и промышленных систем",
    subtitle: "Промышленные и бытовые серии",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=260&fit=crop&auto=format",
    badge: "Оптом",
  },
  {
    title: "Запчасти для электроинструмента",
    subtitle: "Makita, Интерскол, Bosch, DeWalt",
    img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=260&fit=crop&auto=format",
    badge: null,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", tool: "" });
  const [formSent, setFormSent] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formSending) return;
    setFormError("");
    // Web3Forms access keys are public identifiers, safe to include in browser code.
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || "6cffd5a9-05d8-4a04-b03d-3eec6ae2f6f7";
    if (!accessKey) {
      setFormError("Отправка временно недоступна. Свяжитесь с нами по телефону или через чат.");
      return;
    }
    if (formData.phone.replace(/\D/g, "").length < 10) {
      setFormError("Укажите номер телефона с кодом города или оператора.");
      return;
    }
    const botcheck = new FormData(e.currentTarget).get("botcheck");
    setFormSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: AbortSignal.timeout(20000),
        body: JSON.stringify({
          access_key: accessKey,
          subject: "ТЭН-Мастер — заявка на ремонт",
          from_name: "ТЭН-Мастер",
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: `Запись на ремонт. Модель инструмента: ${formData.tool.trim() || "Не указана"}`,
          botcheck: Boolean(botcheck),
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Submission failed");
      setFormSent(true);
      setFormData({ name: "", phone: "", tool: "" });
    } catch {
      setFormError("Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами по телефону или через чат.");
    } finally {
      setFormSending(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <CoilIcon className="w-8 h-8 text-[#FF6B00]" />
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="font-bold text-white text-lg leading-tight"
              >
                ТЭН-Мастер<span className="text-[#FF6B00]">.рф</span>
              </span>
            </a>

            {/* Nav — desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Location */}
            <div className="hidden xl:flex items-center gap-1 text-xs text-slate-400">
              <MapPinIcon />
              <span>Москва (Сигнальный проезд)</span>
            </div>

            {/* Right cluster */}
            <div className="flex items-center gap-3 ml-auto lg:ml-0">
              <a
                href="tel:+79055899727"
                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#FF6B00] transition-colors"
              >
                <PhoneIcon />
                +7 (905) 589-97-27
              </a>
              <a
                href="#contacts"
                className="hidden md:block px-3 py-1.5 rounded-lg border border-[#FF6B00] text-[#FF6B00] text-xs font-semibold hover:bg-[#FF6B00] hover:text-white transition-all"
              >
                Заказать звонок
              </a>
              <button className="text-slate-300 hover:text-white transition-colors p-1">
                <SearchIcon />
              </button>
              <button className="text-slate-300 hover:text-white transition-colors p-1">
                <CartIcon />
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-slate-300 hover:text-white p-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#1E293B] border-t border-[#334155] px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-200 font-medium text-sm py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+79055899727"
              className="flex items-center gap-2 text-[#FF6B00] font-semibold text-sm pt-2 border-t border-[#334155]"
            >
              <PhoneIcon /> +7 (905) 589-97-27
            </a>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <main>
        <section className="bg-[#0F172A] pt-16 pb-20 px-4 sm:px-6 relative overflow-hidden">
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                  <span className="text-xs text-[#FF6B00] font-semibold tracking-wide">В НАЛИЧИИ · МОСКВА</span>
                </div>

                <h1
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6"
                >
                  ТЭНы в наличии и<br />
                  <span className="text-[#FF6B00]">профессиональный</span>
                  <br />
                  ремонт электроинструмента
                </h1>

                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                  Подбор запчастей по каталогу или фото. Срочный ремонт с гарантией. Склады в Москве — самовывоз в день
                  заказа.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="#categories"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#E05E00] text-white font-semibold text-base transition-all shadow-lg shadow-orange-900/30 active:scale-95"
                  >
                    Подобрать ТЭН / Запчасть
                    <ArrowIcon />
                  </a>
                  <a
                    href="#repair"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-slate-600 hover:border-slate-400 text-white font-semibold text-base transition-all active:scale-95"
                  >
                    Сдать инструмент в ремонт
                  </a>
                </div>

                {/* Trust strips */}
                <div className="flex flex-wrap gap-4">
                  {["Гарантия до 6 месяцев", "Бесплатная диагностика", "10+ лет на рынке"].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-sm text-slate-300">
                      <CheckIcon />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — graphic */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Main image */}
                  <div className="rounded-2xl overflow-hidden border border-[#1E293B] shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=480&fit=crop&auto=format"
                      alt="Промышленное отопительное оборудование"
                      width={600}
                      height={480}
                      fetchPriority="high"
                      className="w-full h-72 sm:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent rounded-2xl" />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-4 bg-[#FF6B00] rounded-xl px-4 py-3 shadow-xl">
                    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white font-bold text-2xl">
                      5 000+
                    </div>
                    <div className="text-orange-100 text-xs font-medium">позиций в наличии</div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-[#1E293B] border border-[#334155] rounded-xl px-4 py-3 shadow-xl">
                    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white font-bold text-2xl">
                      1 день
                    </div>
                    <div className="text-slate-400 text-xs font-medium">срок ремонта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STATS BAR ─── */}
        <div className="bg-[#1E293B] border-y border-[#334155]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#334155]">
            {[
              { v: "5 000+", l: "Позиций ТЭНов" },
              { v: "10 лет", l: "На рынке Москвы" },
              { v: "2 склада", l: "Самовывоз сегодня" },
              { v: "Оzon", l: "Официальный магазин" },
            ].map((s) => (
              <div key={s.l} className="text-center px-4 py-2">
                <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#FF6B00] font-bold text-xl">
                  {s.v}
                </div>
                <div className="text-slate-400 text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── CATEGORIES ─── */}
        <section id="categories" className="py-20 px-4 sm:px-6 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-3">
                Каталог
              </div>
              <h2
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4"
              >
                Популярные категории запчастей
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto">
                Широкий ассортимент нагревательных элементов и запчастей для ремонта
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#FF6B00]/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-44 shrink-0 bg-slate-100 overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      width={400}
                      height={260}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {cat.badge && (
                      <div className="absolute top-3 left-3 bg-[#FF6B00] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {cat.badge}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div>
                      <h3
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="font-bold text-[#0F172A] text-base mb-1 leading-snug"
                      >
                        {cat.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-4">{cat.subtitle}</p>
                    </div>

                    <button className="mt-auto w-full py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                      Узнать цену / Купить <ArrowIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── REPAIR ─── */}
        <section id="repair" className="py-20 px-4 sm:px-6 bg-[#0F172A] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }}
          />
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-14">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-3">Сервис</div>
              <h2
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
              >
                Профессиональный ремонт электроинструмента
                <br className="hidden sm:block" /> и садовой техники
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Быстро, качественно, с гарантией. Работаем с инструментом всех ведущих брендов.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Steps */}
              <div className="space-y-4">
                {[
                  {
                    n: "01",
                    icon: <TruckIcon />,
                    title: "Привезите к нам (или отправьте курьером)",
                    desc: "Принимаем инструмент на складе: Сигнальный проезд, 16, стр. 19. Возможна курьерная доставка в обе стороны.",
                  },
                  {
                    n: "02",
                    icon: <SearchIcon />,
                    title: "Бесплатная диагностика при ремонте",
                    desc: "Мастер осмотрит инструмент, определит неисправность и согласует стоимость ремонта. Диагностика — бесплатно при оформлении заказа на ремонт.",
                  },
                  {
                    n: "03",
                    icon: <ShieldIcon />,
                    title: "Ремонт с гарантией до 6 месяцев",
                    desc: "После ремонта выдаём письменную гарантию. Срочный ремонт — от 1 дня. Используем только оригинальные и сертифицированные запчасти.",
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="flex gap-5 bg-[#1E293B] rounded-xl p-5 border border-[#334155] hover:border-[#FF6B00]/40 transition-colors group"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00]/20 transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono mb-1">{step.n}</div>
                      <h3
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="font-bold text-white text-base mb-1"
                      >
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="bg-[#1E293B] rounded-2xl border border-[#334155] p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00] flex items-center justify-center text-white">
                    <WrenchIcon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif" }} className="font-bold text-white text-lg">
                      Записаться на ремонт
                    </h3>
                    <p className="text-slate-400 text-xs">Перезвоним в течение 15 минут</p>
                  </div>
                </div>

                {formSent ? (
                  <div className="text-center py-10" role="status">
                    <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckIcon />
                    </div>
                    <p className="text-white font-semibold">Заявка принята!</p>
                    <p className="text-slate-400 text-sm mt-1">Мастер перезвонит вам в ближайшее время.</p>
                    <button type="button" onClick={() => setFormSent(false)} className="mt-5 text-sm text-[#FF6B00] hover:underline">Отправить ещё заявку</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
                    {[
                      { key: "name", label: "Ваше имя", placeholder: "Иван Петров", type: "text" },
                      { key: "phone", label: "Телефон", placeholder: "+7 (___) ___-__-__", type: "tel" },
                      {
                        key: "tool",
                        label: "Модель инструмента",
                        placeholder: "Makita 2470, болгарка Интерскол…",
                        type: "text",
                      },
                    ].map((f) => (
                      <div key={f.key}>
                        <label htmlFor={`repair-${f.key}`} className="block text-xs text-slate-400 font-medium mb-1.5">{f.label}</label>
                        <input
                          id={`repair-${f.key}`}
                          name={f.key}
                          required={f.key !== "tool"}
                          maxLength={f.key === "phone" ? 30 : 150}
                          autoComplete={f.key === "name" ? "name" : f.key === "phone" ? "tel" : "off"}
                          disabled={formSending}
                          type={f.type}
                          placeholder={f.placeholder}
                          value={formData[f.key as keyof typeof formData]}
                          onChange={(e) => setFormData((d) => ({ ...d, [f.key]: e.target.value }))}
                          className="w-full bg-[#0F172A] border border-[#334155] rounded-lg px-4 py-3 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors"
                        />
                      </div>
                    ))}
                    {formError && <p role="alert" className="text-sm text-red-300">{formError}</p>}
                    <button
                      type="submit"
                      disabled={formSending}
                      className="w-full py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-base transition-all active:scale-95 shadow-lg shadow-orange-900/30 mt-2 disabled:opacity-60 disabled:cursor-wait"
                    >
                      {formSending ? "Отправляем…" : "Вызвать мастера / Записаться"}
                    </button>
                    <p className="text-slate-500 text-xs text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── DELIVERY ─── */}
        <section id="delivery" className="py-20 px-4 sm:px-6 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-3">
                Логистика
              </div>
              <h2
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4"
              >
                Доставка и оплата
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <MapPinIcon />,
                  title: "Самовывоз в Москве",
                  color: "#FF6B00",
                  items: ["Сигнальный проезд, 16, стр. 19", "м. Владыкино", "Пн–Пт: 9:00–18:00, Сб: 10:00–16:00"],
                },
                {
                  icon: <TruckIcon />,
                  title: "Доставка по России",
                  color: "#0F172A",
                  items: [
                    "СДЭК — по всей России",
                    "Почта России — до любого отделения",
                    "Ozon — через маркетплейс",
                    "Отправка в день заказа",
                  ],
                },
                {
                  icon: <CreditCardIcon />,
                  title: "Оплата",
                  color: "#334155",
                  items: [
                    "Наличными при получении",
                    "Банковской картой (Visa, МИР)",
                    "Безналичный расчёт для юр. лиц",
                    "Счёт для ИП и ООО",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: card.color + "12",
                      color: card.color,
                      border: `1px solid ${card.color}30`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif" }} className="font-bold text-[#0F172A] text-lg mb-4">
                    {card.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span
                          className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: card.color + "15", color: card.color }}
                        >
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CALLOUT BANNER ─── */}
        <section className="py-16 px-4 sm:px-6 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#FF6B00] to-[#E05E00] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold text-white mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Не знаете точную модель или артикул ТЭНа?
                </div>
                <p className="text-orange-100 text-lg mb-8">
                  Пришлите фото или размеры — мы подберем аналог <strong className="text-white">за 5 минут.</strong>
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/79055899727"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#0F172A] font-bold text-base hover:bg-orange-50 transition-colors shadow-lg"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Написать в WhatsApp
                  </a>
                  <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white font-bold text-base hover:bg-white/30 transition-colors">
                    <UploadIcon /> Загрузить фото
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACTS ─── */}
        <section id="contacts" className="py-20 px-4 sm:px-6 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-3">
                Контакты
              </div>
              <h2
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-3xl sm:text-4xl font-bold text-[#0F172A]"
              >
                Московские склады и контакты
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact info */}
              <div className="space-y-5">
                {/* Phone */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="font-bold text-[#0F172A] text-base mb-4 flex items-center gap-2"
                  >
                    <PhoneIcon size={18} /> Телефон
                  </h3>
                  <a
                    href="tel:+79055899727"
                    className="text-2xl font-bold text-[#FF6B00] hover:text-[#E05E00] transition-colors block"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    +7 (905) 589-97-27
                  </a>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a
                      href="https://wa.me/79055899727"
                      className="flex items-center gap-1.5 text-sm text-green-600 font-medium hover:underline"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="https://t.me/sergof4"
                      className="flex items-center gap-1.5 text-sm text-sky-500 font-medium hover:underline"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#0088cc">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.267l-2.969-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.837.945z" />
                      </svg>
                      Telegram
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="font-bold text-[#0F172A] text-base mb-4 flex items-center gap-2"
                  >
                    <ClockIcon /> Режим работы
                  </h3>
                  <div className="space-y-1.5 text-sm">
                    {[
                      { d: "Понедельник – Пятница", t: "9:00 – 18:00" },
                      { d: "Суббота", t: "10:00 – 16:00" },
                      { d: "Воскресенье", t: "Выходной" },
                    ].map((r) => (
                      <div key={r.d} className="flex justify-between">
                        <span className="text-slate-500">{r.d}</span>
                        <span className="font-semibold text-[#0F172A]">{r.t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Addresses */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="font-bold text-[#0F172A] text-base mb-4 flex items-center gap-2"
                  >
                    <MapPinIcon /> Адрес склада
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-[#FF6B00] font-bold uppercase tracking-wide mb-1">Склад</div>
                      <div className="text-sm font-semibold text-[#0F172A]">Сигнальный проезд, 16, стр. 19</div>
                      <div className="text-xs text-slate-500">м. Владыкино</div>
                    </div>
                  </div>
                </div>

                {/* Ozon */}
                <a
                  href="https://www.ozon.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      O
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-sm group-hover:text-blue-600 transition-colors">
                      Официальный магазин на Ozon
                    </div>
                    <div className="text-xs text-slate-500">тэн-мастер.рф на Ozon</div>
                  </div>
                  <ArrowIcon />
                </a>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#1E293B] min-h-96 relative">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop&auto=format"
                  alt="Москва"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                  <div
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-white font-bold text-2xl text-center"
                  >
                    Москва
                  </div>
                  {/* Pins */}
                  {[{ name: "Склад", address: "Сигнальный проезд, 16", metro: "м. Владыкино" }].map((pin) => (
                    <div
                      key={pin.name}
                      className="bg-[#0F172A]/90 backdrop-blur border border-[#FF6B00]/40 rounded-xl px-5 py-4 w-full max-w-xs"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-3 h-3 rounded-full bg-[#FF6B00] shrink-0" />
                        <span className="text-[#FF6B00] font-bold text-sm">{pin.name}</span>
                      </div>
                      <div className="text-white text-sm font-medium">{pin.address}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{pin.metro}</div>
                    </div>
                  ))}
                  <a
                    href={`https://yandex.ru/maps/?text=${encodeURIComponent("Москва, Сигнальный проезд, 16, стр. 19")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-bold transition-colors"
                  >
                    Открыть на Яндекс.Картах <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
      </main>
      <footer className="bg-[#0F172A] border-t border-[#1E293B] pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <CoilIcon className="w-7 h-7 text-[#FF6B00]" />
                <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="font-bold text-white text-base">
                  ТЭН-Мастер<span className="text-[#FF6B00]">.рф</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Продажа ТЭНов и запчастей. Ремонт электроинструмента. Москва, с 2014 года.
              </p>
              <a
                href="tel:+79055899727"
                className="flex items-center gap-1.5 text-[#FF6B00] font-semibold text-sm mt-4 hover:text-orange-400"
              >
                <PhoneIcon /> +7 (905) 589-97-27
              </a>
            </div>

            {/* Catalog */}
            <div>
              <h4
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="font-bold text-white text-sm mb-4 uppercase tracking-wide"
              >
                Каталог
              </h4>
              <ul className="space-y-2.5">
                {[
                  "ТЭНы для водонагревателей",
                  "ТЭНы для плит и духовок",
                  "ТЭНы для котлов",
                  "Запчасти для инструмента",
                  "Оптовые поставки",
                ].map((l) => (
                  <li key={l}>
                    <a href="#categories" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="font-bold text-white text-sm mb-4 uppercase tracking-wide"
              >
                Услуги
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Ремонт электроинструмента",
                  "Ремонт садовой техники",
                  "Диагностика (бесплатно)",
                  "Подбор ТЭНа по фото",
                  "Доставка по России",
                ].map((l) => (
                  <li key={l}>
                    <a href="#repair" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="font-bold text-white text-sm mb-4 uppercase tracking-wide"
              >
                Информация
              </h4>
              <ul className="space-y-2.5">
                {[
                  "О компании",
                  "Доставка и оплата",
                  "Гарантия и возврат",
                  "Политика конфиденциальности",
                  "Публичная оферта",
                ].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1E293B] pt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">© 2014–2026 ТЭН-Мастер.рф. Все права защищены.</p>
            <div className="flex items-center gap-3">
              {["СДЭК", "Почта РФ", "Ozon", "МИР", "Visa"].map((b) => (
                <span
                  key={b}
                  className="px-2.5 py-1 rounded border border-[#334155] text-slate-500 text-xs font-medium"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
