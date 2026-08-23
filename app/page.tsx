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
    <main className="min-h-dvh overflow-hidden bg-[#050505] text-white">
      <section className="relative flex min-h-dvh flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(255,87,0,0.42),transparent_32%),linear-gradient(135deg,#050505_0%,#111111_46%,#ff4b00_46%,#ff6500_100%)]" />
        <div className="absolute -right-24 top-8 h-[430px] w-[430px] rounded-full border-[18px] border-white/90 opacity-25 max-md:hidden" />
        <div className="absolute bottom-8 left-0 h-1.5 w-1/3 bg-[#ffc928]" />

        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="/" className="flex items-center gap-3" aria-label="Achadinhos & Ofertas do Dia">
            <img
              src="/logo-achadinhos-redonda.png"
              alt="Achadinhos e Ofertas do Dia"
              className="h-16 w-16 rounded-full object-cover shadow-[0_10px_26px_rgb(0_0_0/35%)] ring-4 ring-white"
            />
            <span className="hidden text-sm font-black uppercase leading-tight text-white sm:block">
              Achadinhos
              <br />
              <span className="text-[#ffc928]">& Ofertas</span>
            </span>
          </a>
          <span className="rounded-full bg-black/50 px-4 py-2 text-xs font-black uppercase text-white/85 ring-1 ring-white/14">
            do dia
          </span>
        </header>

        <div className="relative mx-auto grid w-full max-w-6xl flex-1 grid-cols-[1.08fr_0.92fr] items-center gap-8 px-5 pb-8 pt-2 max-lg:grid-cols-1 max-lg:gap-5 sm:px-8 lg:px-10">
          <div className="max-w-[680px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-black uppercase text-[#ffc928] shadow-[0_12px_30px_rgb(0_0_0/22%)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#ff5a00]" />
              Produtos de cozinha em oferta
            </div>

            <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] tracking-normal text-white drop-shadow-[0_8px_0_rgb(0_0_0/0.7)] max-sm:text-[2.85rem]">
              Achadinhos para deixar sua cozinha mais pratica
            </h1>

            <p className="mt-5 max-w-xl text-lg font-semibold leading-7 text-white/86 max-sm:text-base">
              Garimpamos utensilios, organizadores e pequenos eletros com preco
              bom para voce aproveitar antes que acabe.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/?text=Quero%20entrar%20no%20grupo%20de%20achadinhos%20e%20ofertas%20do%20dia"
                className="inline-flex h-14 items-center gap-3 rounded-full bg-[#25d366] px-6 text-base font-black uppercase text-[#061308] shadow-[0_16px_0_#0f3f20,0_26px_38px_rgb(0_0_0/38%)] transition hover:-translate-y-0.5 hover:bg-[#2ee271] focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                <WhatsAppIcon />
                quero entrar no grupo
              </a>
              <span className="rounded-full bg-black/45 px-4 py-3 text-sm font-bold text-white/80 ring-1 ring-white/12">
                Ofertas diarias no WhatsApp
              </span>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-[440px] gap-3 max-lg:max-w-[360px]">
            {['Panelas antiaderentes', 'Organizadores praticos', 'Utensilios do dia'].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-[8px] border border-white/14 bg-black/56 px-5 py-4 shadow-[0_18px_40px_rgb(0_0_0/28%)] backdrop-blur"
                >
                  <span className="text-base font-black uppercase text-white">
                    {item}
                  </span>
                  <span className="rounded-full bg-[#ffc928] px-3 py-1 text-sm font-black text-black">
                    -{35 + index * 10}%
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
