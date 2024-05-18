import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Video = () => {
  const animationOptions = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div className="w-full flex flex-col gap-10 py-20 px-4 justify-center items-center text-center">
      <h1 className="bg-gradient-to-r from-secondary to-terciary bg-clip-text text-transparent title text-5xl sm:text-6xl title">
        Launching on Pump.fun
      </h1>
      <h3 className="text-white tracking-widest flex flex-col gap-2 text-xl sm:text-2xl w-[85%] md:w-[58%]">
        Join the meme revolution and grab your share of BatWifBat tokens now.
        It&apos;s not just a meme, it&apos;s a movement!{" "}
        <span className="text-black font-bold text-2xl">#BatWifBat</span>
        100% community token from the beggining
      </h3>
      <div className="flex flex-col sm:flex-row gap-10 w-full items-center justify-center">
        <div className="flex flex-col gap-3">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? animationOptions : {}}
            ref={ref1}
            src="/pump.png"
            alt="Pump"
            className="w-72 sm:w-64 rounded "
          />
        </div>
        <div className="flex flex-col gap-3">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={inView1 ? animationOptions : {}}
            ref={ref1}
            src="/solana.png"
            alt="Solana"
            className="w-64 sm:w-52"
          />
        </div>
      </div>
    </div>
  );
};
