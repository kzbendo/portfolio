import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION; make this first as this will appear on top of the text that is shown on the left side when shown in a smaller screen */}

      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {/* styling the image part with the window like border behind it */}
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-right-20
         before:w-full before:max-w-[400px] before:h-full before:max-h-[400px] before:border-2 before:border-yellow before:z-[-1]"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
               max-w-[400px] md:max-w-[600px]"
                src="assets/profile-image.jpg"
              />
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 rounded-t-[400px] rounded-b-[400px] transition duration-500 z-10 w-full
             max-w-[400px] md:max-w-[600px]"
                src="assets/profile-image.jpg"
              />
            </div>
          </motion.div>
        )}
      </div>
      {/* MAIN/TEXT SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS; wrap with motion.div to put animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text:start whitespace-nowrap">
            Kenneth {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 
                xs:before:content-brushstroke before:absolute before:-left-[20px] 
                before:-top-[12px] before:z-[-1]"
            >
              Bendo
            </span>
          </p>

          <p className="xs:text-red mt-10 mb-7 text-sm text-center md:text-start">
            Rising Developer. Future Explorer.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
             hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("about")}
            href="#about"
          >
            About Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
               justify-center font-playfair px-10"
            >
              Contact Me.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
