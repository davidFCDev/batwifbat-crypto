import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <div className="w-full justify-center flex flex-col sm:flex-row gap-10 lg:gap-36 items-center p-10 sm:p-16">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? animationOptions : {}}
        ref={ref1}
        src="/public/crew.png"
        alt="prueba"
        className="min-w-[350px] sm:min-w-[400px] lg:w-[700px] shadow-sm rounded-2xl shadow-black"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? animationOptions : {}}
        ref={ref2}
        className="flex flex-col w-96 gap-5 items-center sm:items-start p-6 sm:p-0"
      >
        <h2 className="bg-gradient-to-r from-secondary to-terciary bg-clip-text text-transparent title text-5xl sm:text-6xl title">
          How to Buy
        </h2>
        <h3 className="tracking-widest flex flex-col gap-2 text-xl sm:text-2xl text-white">
          To join the family you just need to follow these steps:
        </h3>
        <ol className="text-2xl font-bold flex flex-col gap-4">
          <li className="flex gap-4 text-white items-center">
            <img src="/check.png" alt="icono azul" className="w-10" />
            Join Pump.fun
          </li>
          <li className="flex gap-4 text-white items-center">
            <img src="/check.png" alt="icono azul" className="w-10" />
            Connect your wallet
          </li>
          <li className="flex gap-4 text-white items-center">
            <img src="/check.png" alt="icono azul" className="w-10" />
            Buy
          </li>
        </ol>
        <a
          href="https://www.pump.fun/board"
          target="_blank"
          rel="noreferrer"
          className="border-2 border-black text-xl sm:text-4xl bg-gradient-to-r from-secondary to-terciary text-purple-800 hover:text-white transition-all px-3 sm:px-8 py-1 sm:py-2 rounded-3xl shadow-sm"
        >
          Connect Pump.fun
        </a>
      </motion.div>
    </div>
  );
};
