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

export default function Home() {
  return (
    <main className="min-h-dvh overflow-hidden bg-[#fff9f0] text-[#24150d]">
      <section className="relative flex min-h-dvh flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,106,0,0.18),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(255,201,40,0.22),transparent_28%),linear-gradient(180deg,#fffaf2_0%,#fff3e1_58%,#ffe8cf_100%)]" />
        <div className="absolute left-1/2 top-7 h-[min(72vw,520px)] w-[min(72vw,520px)] -translate-x-1/2 rounded-full border border-[#ff7a1a]/16 bg-white/28 shadow-[0_30px_90px_rgb(255_106_0/12%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/60 to-transparent" />

        <header className="relative z-10 mx-auto flex w-full max-w-5xl justify-center px-5 pt-7 sm:px-8">
          <a
            href="/"
            className="flex flex-col items-center gap-3 text-center"
            aria-label="Achadinhos & Ofertas do Dia"
          >
            <img
              src="/logo-achadinhos-redonda.png"
              alt="Achadinhos e Ofertas do Dia"
              className="h-24 w-24 rounded-full object-cover shadow-[0_14px_34px_rgb(255_106_0/22%)] ring-4 ring-white sm:h-28 sm:w-28"
            />
            <span className="text-sm font-black uppercase leading-tight text-[#24150d]">
              Achadinhos
              <br />
              <span className="text-[#ff6a00]">& Ofertas</span>
            </span>
          </a>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pb-10 pt-5 text-center sm:px-8">
          <div className="flex max-w-[760px] flex-col items-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff8a2b]/20 bg-white/72 px-4 py-2 text-xs font-black uppercase text-[#c95000] shadow-[0_12px_30px_rgb(255_106_0/10%)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#25d366]" />
              Produtos de cozinha em oferta
            </div>

            <h1 className="text-balance text-4xl font-black uppercase leading-[0.96] tracking-normal text-[#24150d] sm:text-6xl">
              Achadinhos para deixar sua cozinha mais pratica
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-semibold leading-7 text-[#6b4a35] max-sm:text-base">
              Garimpamos utensilios, organizadores e pequenos eletros com preco
              bom para voce aproveitar antes que acabe.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/?text=Quero%20entrar%20no%20grupo%20de%20achadinhos%20e%20ofertas%20do%20dia"
                className="group relative inline-flex min-h-16 items-center gap-3 overflow-hidden rounded-full bg-[#16c75a] px-5 py-4 text-sm font-black uppercase text-white shadow-[0_16px_34px_rgb(22_199_90/30%),inset_0_1px_0_rgb(255_255_255/40%)] ring-1 ring-[#0fa84a]/20 transition hover:-translate-y-0.5 hover:bg-[#13b650] hover:shadow-[0_20px_42px_rgb(22_199_90/34%),inset_0_1px_0_rgb(255_255_255/42%)] focus:outline-none focus:ring-4 focus:ring-[#25d366]/26 sm:px-8 sm:text-base"
              >
                <span className="absolute inset-x-6 top-0 h-px bg-white/55" />
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#16a34a] shadow-[inset_0_-1px_0_rgb(0_0_0/8%)]">
                  <WhatsAppIcon />
                </span>
                <span className="leading-none">quero entrar no grupo</span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/16 transition group-hover:translate-x-0.5"
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
              <span className="rounded-full bg-white/72 px-4 py-3 text-sm font-bold text-[#7b5338] ring-1 ring-[#ff8a2b]/16">
                Ofertas diarias no WhatsApp
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
