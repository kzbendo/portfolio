import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a href={link} target="_blank" rel="noreferrer">
          <p className="text-2xl font-playfair select-none">{title}</p>
          <p className="mt-7 select-none">{subtitle}</p>
        </a>
      </div>
      <img
        className="w-full"
        src={`../assets/${projectTitle}.jpg`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/*HEADINGS*/}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="md:grid md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project
            title="Portfolio"
            subtitle="Simple responsive web app powered by React with Tailwind, Framer Motion, and React Hook Form."
            link=""
          />

          <Project
            title="Fruit Crush"
            subtitle="Candy Crush game clone demonstrating basic functionality. Powered by React in Typescript with Redux Toolkit and Tailwind."
            link="https://kbendofruitcrush.vercel.app/"
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-red 
                      max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            MORE TO COME
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
