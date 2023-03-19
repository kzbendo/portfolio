import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const AboutMe = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-red">ME</span>
          </p>
          <LineGradient width="w-2/3" />
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                      before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="about" className="z-10" src="assets/retro.jpg" />
            </div>
          ) : (
            <img
              alt="about"
              className="z-10 justify-between"
              src="assets/retro.jpg"
            />
          )}
        </div>
      </div>

      {/* TRIPLE BLOCK */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* HISTORY*/}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl">History</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I'm a Computer Science graduate from University of California, Santa
            Cruz. Ever since from childhood, I've been fascinated and fixated on
            knowing how things work, more specifically with electronics. My
            curiosity raised further as I joined the robotics club in high
            school. Reaching college, and even after, I desire to know more
            about our past, current and future software and hardware
            technologies. Now I want to grasp the opportunity to be a developer
            and, perhaps, be part of something big.
          </p>
        </motion.div>

        {/* PERSONALITY */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl">
                Personality
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Strong-willed person at heart. Definitely always eager to learn new
            things and passionate on putting effort to tackle any challenges.
            Never settle for less and always positively striving for
            improvements to move forward and become better than before even by a
            bit.
          </p>
        </motion.div>

        {/* PASTIMES */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl">Pastimes</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Avid gamer since childhood. I'm a big fan of breakdancing, bicycling
            and working out. I like to tinker with electronics (from fixing
            headphones to building a handwired keyboard and such). Playing
            guitar and jamming to music is my another go-to.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
