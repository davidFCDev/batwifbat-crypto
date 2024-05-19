export const Header = () => {
  return (
    <header className="flex justify-around items-center p-6 font-semibold text-white">
      <img src="/LogoText_PNG.png" alt="Letra logos" className="w-56 hidden lg:block" />
      <div className="flex gap-4 sm:gap-10 text-md md:text-3xl items-center">
        <a
          href="https://t.me/BatWifBatportal"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary"
        >
          Telegram
        </a>
        <a
          href="https://x.com/BatWifBatSolana"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary"
        >
          Twitter
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary"
        >
          Chart
        </a>
        <a
          href="https://www.pump.fun/board"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary"
        >
          <img src="/pump.png" alt="Pump" className="w-10 sm:w-20 inline-block" />
        </a>
      </div>
      <div>
        <a
          href=""
          className="text-xl sm:text-4xl bg-gradient-to-r from-secondary to-terciary text-black hover:text-white transition-all px-3 sm:px-5 py-1 sm:py-2 rounded-3xl"
        >
          Trade Now
        </a>
      </div>
    </header>
  );
};
