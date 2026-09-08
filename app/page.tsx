function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19.1 4.9A9.9 9.9 0 0 0 3.6 16.8L2.3 21.5l4.8-1.3a9.9 9.9 0 0 0 4.7 1.2h.1A9.9 9.9 0 0 0 19.1 4.9Zm-7.2 14.8h-.1a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.8-.2-.3a8.1 8.1 0 1 1 6.7 3.6Zm4.5-6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.1.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

const tickerMessages = [
  'Ofertas do dia',
  'Até 60% off',
  'Looks selecionados',
  'Cupons selecionados',
  'Promoções relâmpago',
  'Novidades no grupo',
];

const highlights = [
  {
    title: 'Promoções',
    text: 'diárias',
    icon: 'M13 2 4 14h7l-1 8 10-13h-7l1-7Z',
  },
  {
    title: 'Cupons',
    text: 'selecionados',
    icon: 'M4 7a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v2.2a2.8 2.8 0 0 0 0 5.6V17a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3v-2.2a2.8 2.8 0 0 0 0-5.6V7Z',
  },
  {
    title: 'Achados',
    text: 'com estilo',
    icon: 'm21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z',
  },
];

export default function Home() {
  const marqueeItems = [...tickerMessages, ...tickerMessages];

  return (
    <main className="min-h-dvh overflow-hidden bg-[#fff7ed] text-[#24150d]">
      <section className="relative flex min-h-dvh flex-col bg-[linear-gradient(180deg,#fffaf4_0%,#fff2e2_54%,#ffe5c8_100%)]">
        <div className="absolute inset-0 opacity-[0.38] [background-image:linear-gradient(135deg,rgba(255,106,0,0.12)_0_1px,transparent_1px_18px)]" />
        <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-[#ff8a2b]/30 to-transparent" />

        <div className="relative z-20 w-full overflow-hidden border-b border-[#ff8a2b]/16 bg-white/58 py-2 shadow-[0_10px_30px_rgb(255_106_0/8%)] backdrop-blur-md">
          <div className="marquee-track flex w-max items-center gap-4">
            {marqueeItems.map((message, index) => (
              <span
                key={`${message}-${index}`}
                className="inline-flex items-center gap-4 text-xs font-bold uppercase text-[#b94700]"
              >
                <span>{message}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" />
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 items-center justify-center px-4 py-6 text-center sm:px-6 sm:py-8">
          <div className="w-full">
            <a
              href="/"
              className="mx-auto flex w-fit flex-col items-center gap-2"
              aria-label="Achadinhos & Ofertas do Dia"
            >
              <img
                src="/logo-achadinhos-redonda.png"
                alt="Achadinhos e Ofertas do Dia"
                className="h-24 w-24 rounded-full object-cover shadow-[0_14px_30px_rgb(255_106_0/18%)] ring-4 ring-white sm:h-28 sm:w-28"
              />
              <span className="text-sm font-bold uppercase leading-tight text-[#24150d]">
                Achadinhos
                <br />
                <span className="text-[#ff6a00]">& Ofertas</span>
              </span>
            </a>

            <div className="mx-auto mt-5 max-w-2xl border-y border-[#ff8a2b]/18 py-5 sm:mt-6 sm:py-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c95000]">
                Ofertas e descontos todos os dias
              </p>

              <h1 className="mx-auto mt-3 max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-normal text-[#24150d] sm:text-6xl">
                Seu próximo <span className="text-[#ff6a00]">look</span> pode
                estar aqui
              </h1>

              <p className="mx-auto mt-4 max-w-lg text-base font-medium leading-7 text-[#6b4a35] sm:text-lg">
                Entre no grupo e receba promoções, cupons e achadinhos
                selecionados para aproveitar antes que acabe.
              </p>

              <a
                href="https://chat.whatsapp.com/Iqzfyh1mGPqKMP9QqpO2EO"
                className="group mx-auto mt-5 inline-flex min-h-14 w-full max-w-[380px] items-center justify-center gap-3 rounded-full bg-[#17c964] px-5 py-3.5 text-base font-bold text-white shadow-[0_18px_34px_rgb(23_201_100/30%),inset_0_1px_0_rgb(255_255_255/42%)] ring-1 ring-[#0ea34d]/20 transition hover:-translate-y-0.5 hover:bg-[#13b958] hover:shadow-[0_22px_42px_rgb(23_201_100/34%),inset_0_1px_0_rgb(255_255_255/42%)] focus:outline-none focus:ring-4 focus:ring-[#25d366]/28"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#16a34a] shadow-[inset_0_-1px_0_rgb(0_0_0/8%)]">
                  <WhatsAppIcon />
                </span>
                <span>Quero entrar no grupo</span>
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 place-items-center rounded-full bg-white/16 transition group-hover:translate-x-0.5"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="mx-auto mt-5 grid max-w-xl grid-cols-3 divide-x divide-[#ff8a2b]/18 rounded-[22px] border border-[#ff8a2b]/14 bg-white/58 px-2 py-3 shadow-[0_16px_34px_rgb(123_69_23/8%)] backdrop-blur">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-16 flex-col items-center justify-center px-2 text-center"
                >
                  <svg
                    aria-hidden="true"
                    className="mb-1.5 h-5 w-5 text-[#ff6a00]"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.1"
                    viewBox="0 0 24 24"
                  >
                    <path d={item.icon} />
                  </svg>
                  <strong className="text-xs font-bold uppercase leading-4 text-[#2b170d] sm:text-sm">
                    {item.title}
                  </strong>
                  <span className="text-xs font-semibold leading-4 text-[#8a5b3c]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
