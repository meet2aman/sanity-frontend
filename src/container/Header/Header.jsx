import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper/AppWrap";
import ReactTooltip from "react-tooltip";

// import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <motion.div
              style={{ cursor: "pointer" }}
              whileHover={{ scale: 0.95, transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.8 }}
              className="badge-cmp app__flex card"
              layout="position"
              transition={{ layout: { duration: 1 } }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <ReactTooltip
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                <p>Touch me</p>
              </ReactTooltip>
              <motion.div>
                <span>
                  <motion.img
                    animate={{ rotate: [50, 20, 20, 50] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    src={images.waving_hand}
                    alt="waving_hand"
                  />
                </span>
                <div style={{ marginLeft: 20 }}>
                  <p className="p-text">Hello, I am</p>
                  <h1 className="head-text">AMAN</h1>
                </div>
              </motion.div>
              {isOpen && (
                <motion.div>
                  <h3 className="card-h3">Hey! What's Up.</h3>
                  <p className="card-para">Do You Want Me to Hire.</p>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="tag-cmp app__flex"
            >
              <p className="p-text">Web Developer</p>
              <p className="p-text">Freelancer</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.amanP} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.flutter, images.react, images.sass, images.redux].map(
            (circle, index) => (
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="circle-cmp app__flex"
                key={`circle-${index}`}
              >
                <img src={circle} alt="profile_bg" />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(Header, "home");
