import { FaLayerGroup, FaShieldAlt, FaBookOpen } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Description = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.6, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.6, triggerOnce: true });
  return (
    <div className="w-full justify-center flex flex-col gap-16 items-center text-center p-10 sm:p-28">
      <h1 className="bg-gradient-to-r from-secondary to-terciary bg-clip-text text-transparent title text-5xl sm:text-6xl title">
        More about us
      </h1>
      <div className="flex flex-col sm:flex-row gap-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? animationOptions : {}}
          ref={ref1}
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <FaLayerGroup className="text-8xl shadow-md rounded-3xl p-5 text-secondary bg-black" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold text-secondary">
              Built on Solana
            </h2>
            <p className="text-2xl text-white">
              Built on the best, rapid and efficient Blockchain.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? animationOptions : {}}
          ref={ref2}
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <FaShieldAlt className="text-8xl shadow-md rounded-3xl p-5 text-secondary bg-black" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold text-secondary">High Security</h2>
            <p className="text-2xl text-white">
              Liquidity burnt. 1b Supply. 100% Community Token.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? animationOptions : {}}
          ref={ref3}
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <FaBookOpen className="text-8xl shadow-md rounded-3xl p-5 text-secondary bg-black" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold text-secondary">
              Funny Narrative
            </h2>
            <p className="text-2xl text-white">
              A bat wif bat, clear and singular.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView4 ? animationOptions : {}}
          ref={ref4}
          className="flex flex-col gap-10 items-center p-3 text-center"
        >
          <RiTeamFill className="text-8xl shadow-md rounded-3xl p-5 text-secondary bg-black" />
          <div className="items-center flex flex-col">
            <h2 className="text-3xl font-bold text-secondary">Strong Team</h2>
            <p className="text-2xl text-white">
              Led by a great team that does not stop working.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="text-white text-xl w-full rounded-lg h-40 mt-10 p-5 flex flex-col gap-4 items-center justify-center">
        <p>
          Join us in our journey to the moon. We are a community-driven project!
        </p>
        <p>Developed by <a href="https://t.me/hellboundTrade" className="underline text-secondary text-2xl">Chucky</a></p>
      </div>
    </div>
  );
};
