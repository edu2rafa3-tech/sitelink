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

const highlights = [
  {
    title: 'Promoções',
    text: 'Diárias',
    icon: 'M13 2 4 14h7l-1 8 10-13h-7l1-7Z',
  },
  {
    title: 'Cupons',
    text: 'Exclusivos',
    icon: 'M4 7a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v2.2a2.8 2.8 0 0 0 0 5.6V17a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3v-2.2a2.8 2.8 0 0 0 0-5.6V7Z',
  },
  {
    title: 'Seleção',
    text: 'Curada',
    icon: 'm21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z',
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#080301] text-[#fff8ef]">
      <section className="relative grid min-h-dvh place-items-center px-4 py-7 sm:px-6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#140803_0%,#080301_48%,#020100_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.20),transparent_48%)]" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#ff6a00]/10 to-transparent" />

        <div className="relative z-10 w-full max-w-[430px] rounded-[28px] border border-[#ff6a00]/25 bg-[#120803]/92 px-5 py-7 text-center shadow-[0_32px_90px_rgb(0_0_0/58%),inset_0_1px_0_rgb(255_255_255/8%)] sm:px-6 sm:py-8">
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,106,0,0.08),transparent_34%,rgba(255,106,0,0.04))]" />

          <div className="relative">
            <a
              href="/"
              className="mx-auto flex w-fit flex-col items-center gap-2"
              aria-label="Achadinhos & Ofertas do Dia"
            >
              <img
                src="/logo-achadinhos-redonda.png"
                alt="Achadinhos e Ofertas do Dia"
                className="h-24 w-24 rounded-full object-cover shadow-[0_12px_28px_rgb(255_106_0/30%)] ring-2 ring-[#ffb56b]/70 sm:h-28 sm:w-28"
              />
            </a>

            <p className="mt-6 text-sm font-semibold text-[#ffb169]">
              Ofertas e descontos todos os dias
            </p>

            <h1 className="mx-auto mt-2 max-w-[340px] text-balance text-3xl font-bold leading-[1.08] tracking-normal text-white sm:text-4xl">
              TE AJUDO A COMPRAR BARATO!
            </h1>

            <p className="mx-auto mt-3 max-w-[320px] text-xl font-bold leading-7 text-[#ffb169]">
              As melhores promoções estão aqui!
            </p>

            <p className="mx-auto mt-4 max-w-[330px] text-base font-medium leading-7 text-[#c9a996]">
              Entre para o grupo e receba promoções, cupons e achadinhos
              selecionados para você economizar.
            </p>

            <a
              href="https://chat.whatsapp.com/Iqzfyh1mGPqKMP9QqpO2EO"
              className="cta-button group relative isolate mx-auto mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#18c963] px-5 py-4 text-base font-bold text-white shadow-[0_18px_34px_rgb(24_201_99/28%),inset_0_1px_0_rgb(255_255_255/40%)] ring-1 ring-[#67f09c]/30 transition hover:bg-[#15b95a] focus:outline-none focus:ring-4 focus:ring-[#25d366]/28"
            >
              <span className="cta-button-shine" aria-hidden="true" />
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#16a34a] shadow-[inset_0_-1px_0_rgb(0_0_0/8%)]">
                <WhatsAppIcon />
              </span>
              <span className="relative z-10">Quero entrar no grupo</span>
              <span className="relative z-10 text-[#eafff0]" aria-hidden="true">
                +
              </span>
            </a>

            <div className="mt-6 grid grid-cols-3 gap-2.5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-[88px] flex-col items-center justify-center rounded-2xl border border-[#ff6a00]/18 bg-[#201006] px-2 text-center shadow-[inset_0_1px_0_rgb(255_255_255/7%)]"
                >
                  <svg
                    aria-hidden="true"
                    className="mb-2 h-5 w-5 text-[#ff8a2b]"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.1"
                    viewBox="0 0 24 24"
                  >
                    <path d={item.icon} />
                  </svg>
                  <strong className="text-xs font-bold leading-4 text-[#f8eadf]">
                    {item.title}
                  </strong>
                  <span className="text-xs font-medium leading-4 text-[#b88f78]">
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
