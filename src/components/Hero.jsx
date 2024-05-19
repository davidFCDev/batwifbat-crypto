export const Hero = () => {
  return (
    <div className="w-full p-3 flex flex-col gap-5 items-center">
      <h1 className="bg-gradient-to-r from-secondary to-terciary bg-clip-text text-transparent text-5xl sm:text-7xl title font-bold">
        Bat Wif Bat
      </h1>
      <div className="text-white tracking-widest flex flex-col gap-1 text-center text-xl sm:text-2xl font-semibold">
        <h3>First-ever crypto meme inspired by homonymous words!</h3>
        <h3>
          <span className="text-secondary">Get ready</span> to soar into the
          world of digital currency with a playful twist.
        </h3>
      </div>
      <div className="flex flex-col-reverse sm:flex-row w-full justify-center m-5 gap-16 items-center">
        <img src="/BATWIFBAT.png" alt="Lata" className=" sm:w-2/4" />
      </div>
    </div>
  );
};
