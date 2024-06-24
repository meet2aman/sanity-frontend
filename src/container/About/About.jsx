import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


import { urlFor, client } from "../../client";
import "./About.scss";
import { AppWrap } from "../../wrapper/AppWrap";
import { MotionWrap } from "../../wrapper";
// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good Web developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Web Design",
//     description: "I am a good Web developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "UI/UX",
//     description: "I am a good Web developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Web Animations",
//     description: "I am a good Web developer",
//     imgUrl: images.about04,
//   },
// ];
const About = () => {
  const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setabouts(data);
    });
  }, []);

  return (
    <>
      <h2 className=" head-text ">
        I Know That<span> Good Design</span>
        <br />
        means<span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ y: [50, -40], opacity: [0, 1] }}
            // whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h3 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h3>
            <p className="p-text" style={{ marginTop: 20 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
