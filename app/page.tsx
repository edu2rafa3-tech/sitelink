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

const logoBadges = ['Até 60% off', 'Cupons do dia', 'Looks selecionados'];

const benefitCards = [
  {
    title: 'Ofertas verificadas',
    text: 'Achados selecionados antes de aparecerem no grupo.',
  },
  {
    title: 'Compra mais prática',
    text: 'Peças, acessórios e tendências em um só lugar.',
  },
];

export default function Home() {
  const marqueeItems = [...tickerMessages, ...tickerMessages];

  return (
    <main className="min-h-dvh overflow-hidden bg-[#fff9f0] text-[#24150d]">
      <section className="relative flex min-h-dvh flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,106,0,0.18),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(255,201,40,0.22),transparent_28%),linear-gradient(180deg,#fffaf2_0%,#fff3e1_58%,#ffe8cf_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />

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

        <header className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-4 sm:px-6">
          <div className="absolute left-1/2 top-12 hidden h-px w-[min(72vw,520px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff8a2b]/28 to-transparent sm:block" />
          <span className="absolute left-[14%] top-12 hidden rounded-full border border-[#ff8a2b]/18 bg-white/62 px-3 py-1.5 text-xs font-semibold text-[#a94a0a] shadow-[0_10px_24px_rgb(255_106_0/9%)] backdrop-blur sm:inline-flex">
            ofertas fresquinhas
          </span>
          <span className="absolute right-[14%] top-12 hidden rounded-full border border-[#25d366]/20 bg-white/62 px-3 py-1.5 text-xs font-semibold text-[#168f45] shadow-[0_10px_24px_rgb(37_211_102/10%)] backdrop-blur sm:inline-flex">
            direto no WhatsApp
          </span>
          <a
            href="/"
            className="relative flex flex-col items-center gap-2 text-center"
            aria-label="Achadinhos & Ofertas do Dia"
          >
            <img
              src="/logo-achadinhos-redonda.png"
              alt="Achadinhos e Ofertas do Dia"
              className="h-20 w-20 rounded-full object-cover shadow-[0_10px_24px_rgb(255_106_0/16%)] ring-4 ring-white sm:h-24 sm:w-24"
            />
            <span className="text-sm font-bold uppercase leading-tight text-[#24150d]">
              Achadinhos
              <br />
              <span className="text-[#ff6a00]">& Ofertas</span>
            </span>
          </a>
          <div className="mt-3 flex max-w-[330px] flex-wrap justify-center gap-2">
            {logoBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#ff8a2b]/18 bg-white/66 px-3 py-1.5 text-xs font-semibold text-[#a94a0a] shadow-[0_8px_20px_rgb(255_106_0/8%)] backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-start px-4 pb-6 pt-5 text-center sm:px-6 sm:pt-8">
          <div className="flex max-w-[760px] flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff8a2b]/20 bg-white/72 px-3.5 py-1.5 text-xs font-bold uppercase text-[#c95000] shadow-[0_12px_30px_rgb(255_106_0/10%)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#25d366]" />
              Achadinhos de moda em oferta
            </div>

            <h1 className="text-balance text-center text-4xl font-semibold leading-[1.04] tracking-normal text-[#24150d] sm:text-6xl">
              Seu próximo <span className="text-[#ff6a00]">look</span> pode
              estar aqui
            </h1>

            <p className="mt-4 max-w-2xl text-lg font-medium leading-7 text-[#6b4a35] max-sm:text-base">
              Garimpamos achadinhos, tendências e ofertas especiais com preço
              bom para você aproveitar antes que acabe.
            </p>

            <div className="mt-6 flex flex-col items-center gap-2.5 sm:flex-row">
              <a
                href="https://chat.whatsapp.com/Iqzfyh1mGPqKMP9QqpO2EO"
                className="group relative inline-flex min-h-14 items-center gap-3 overflow-hidden rounded-full bg-[#16c75a] px-4 py-3 text-sm font-bold uppercase text-white shadow-[0_16px_34px_rgb(22_199_90/30%),inset_0_1px_0_rgb(255_255_255/40%)] ring-1 ring-[#0fa84a]/20 transition hover:-translate-y-0.5 hover:bg-[#13b650] hover:shadow-[0_20px_42px_rgb(22_199_90/34%),inset_0_1px_0_rgb(255_255_255/42%)] focus:outline-none focus:ring-4 focus:ring-[#25d366]/26 sm:px-7 sm:text-base"
              >
                <span className="absolute inset-x-6 top-0 h-px bg-white/55" />
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#16a34a] shadow-[inset_0_-1px_0_rgb(0_0_0/8%)]">
                  <WhatsAppIcon />
                </span>
                <span className="leading-none">quero entrar no grupo</span>
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
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </a>
              <span className="rounded-full bg-white/72 px-3.5 py-2.5 text-sm font-semibold text-[#7b5338] ring-1 ring-[#ff8a2b]/16">
                Ofertas diárias no WhatsApp
              </span>
            </div>

            <div className="mt-5 w-full max-w-3xl rounded-[22px] border border-white/70 bg-white/52 p-2.5 shadow-[0_18px_50px_rgb(123_69_23/10%)] backdrop-blur-md">
              <div className="grid gap-2.5 sm:grid-cols-3">
                {benefitCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[16px] border border-[#ff8a2b]/12 bg-[#fffaf4]/76 px-4 py-3 text-left shadow-[inset_0_1px_0_rgb(255_255_255/70%)]"
                  >
                    <span className="mb-2 block h-1.5 w-8 rounded-full bg-[#ff8a2b]" />
                    <h2 className="text-sm font-bold text-[#2b170d]">
                      {card.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium leading-5 text-[#7b5338]">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
