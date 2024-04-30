import "./App.css";
import React, { useState, useEffect } from "react";
import pdf from "./files/cv.pdf";
import { motion } from "framer-motion";
import Favicon from "./img/fav512.png";
import {
  GlobeIcon,
  Sparkles,
  Box,
  Briefcase,
  AtSign,
  Squircle,
  X,
  Triangle,
  Pentagon,
} from "lucide-react";
import ArrowIcon from "./components/ArrowIcon";
import Window from "./components/Window";
import { contact, experience, projects, today } from "./content/contents";
import Link from "./components/Link";

function App() {
  const [themeColor, setThemeColor] = useState("#000000");

  const [sectionOpen, setSectionOpen] = useState(false);
  const [content, setContent] = useState(null);
  const handleSectionClick = (section, content) => {
    setSectionOpen(section);
    setContent(content);
  };

  useEffect(() => {
    if (window.scrollY > 0) {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 1000);
    }

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const colorSchemeListener = (e) => {
      const newThemeColor = e.matches ? "#111110" : "#ffffff";
      setThemeColor(newThemeColor);
    };

    colorSchemeListener(prefersDarkMode);

    prefersDarkMode.addEventListener("change", colorSchemeListener);

    return () => {
      prefersDarkMode.removeEventListener("change", colorSchemeListener);
    };
  }, []);

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeColor);
    }
  }, [themeColor]);

  const itemVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 5 },
    exit: { opacity: 0 },
  };
  const appVariant = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.07,
      },
    },
  };

  const nameSection = (
    <motion.div variants={itemVariant}>
      <motion.div
        variants={{ itemVariant }}
        style={{
          display: "flex",
          gap: "0.8em",
          marginBottom: "2em",
          marginTop: "2em",
          alignItems: "center",
        }}
      >
        <motion.img
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.3, type: "spring", duration: 3 }}
          style={{ height: "1.9em", width: "1.9em" }}
          alt="icon by https://github.com/meinardxd"
          src={Favicon}
        />
        <motion.div
          // animate={{ scale: [1, 1.2, 0.8, 1.1, 0.9, 1] }}
          animate={{ scale: [3, 1], opacity: [0, 1] }}
          transition={{ delay: 0.5, type: "spring" }}
          // whileHover={{
          //   scale: 1.5,
          //   transition: { duration: 0.2 },
          // }}
          // whileTap={{
          //   scale: 10,
          //   transition: { duration: 0.2 },
          // }}
          style={{
            width: "1em",
            height: "1em",
            backgroundColor: "#f4a460",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{ rotate: ["180deg", "0deg"], opacity: [0, 1] }}
          transition={{ delay: 0.7 }}
          style={{ display: "flex", alignItems: "center" }}
          // whileHover={{
          //   scale: 1.5,
          //   transition: { duration: 0.2 },
          // }}
          // whileTap={{
          //   rotate: "45deg",
          //   transition: { duration: 0.2 },
          // }}
        >
          <X size={"1.3em"} strokeWidth={6} color="#228b22" />
        </motion.div>
        <motion.div
          animate={{ scale: [0, 3, 1], opacity: [0, 1] }}
          transition={{ delay: 0.9, type: "spring" }}
          style={{ display: "flex", alignItems: "center" }}
          // whileHover={{
          //   scale: 1.5,
          //   transition: { duration: 0.2 },
          // }}
          // whileTap={{
          //   scale: 10,
          //   transition: { duration: 0.2 },
          // }}
        >
          <Triangle size={"1.25em"} strokeWidth={0} fill="#6495ed" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 2, 0, -3, 0], opacity: [0, 1] }}
          transition={{ delay: 1.1 }}
          style={{ display: "flex", alignItems: "center" }}
          // whileHover={{
          //   scale: 1.5,
          //   transition: { duration: 0.2 },
          // }}
          // whileTap={{
          //   // x: 20,
          //   scale: 10,
          //   transition: { duration: 0.2 },
          // }}
        >
          <Squircle size={"1.35em"} strokeWidth={0} fill="#d75244" />
        </motion.div>
        <motion.div
          animate={{
            rotate: ["40deg", "0deg"],
            scale: [1, 1.2, 1, 1.2, 1],
            opacity: [0, 1],
            x: [0, 15, 0],
          }}
          transition={{ delay: 1.3 }}
          style={{ display: "flex", alignItems: "center" }}
          // whileHover={{
          //   scale: 1.5,
          //   transition: { duration: 0.2 },
          // }}
          // whileTap={{
          //   rotate: "360deg",
          //   scale: 10,
          //   transition: { duration: 0.9 },
          // }}
        >
          <Pentagon size={"1.35em"} strokeWidth={0} fill="#FFD700" />
        </motion.div>
      </motion.div>
      <div
        style={{
          display: "flex",
          gap: 5,
          flexDirection: "column",
        }}
      >
        <div>Alaín Gabriel Camba</div>
        <div className="gr">Frontend Engineer</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <GlobeIcon size={14} strokeWidth={2} color="rgb(155, 155, 155)" />
          <div className="gr">Manila, Philippines</div>
        </div>
      </div>
    </motion.div>
  );

  const todaySection = (
    <Link
      handleSectionClick={handleSectionClick}
      label="Today"
      data={today}
      icon={
        <Sparkles size={"1.2em"} strokeWidth={2} color={"rgb(155, 155, 155)"} />
      }
      marginTop
    />
  );

  const expSection = (
    <Link
      handleSectionClick={handleSectionClick}
      label="Experience"
      data={experience}
      icon={
        <Briefcase
          size={"1.1em"}
          strokeWidth={2}
          color={"rgb(155, 155, 155)"}
        />
      }
    />
  );

  const projSection = (
    <Link
      handleSectionClick={handleSectionClick}
      label="Projects"
      data={projects}
      icon={<Box size={"1.1em"} strokeWidth={2} color={"rgb(155, 155, 155)"} />}
    />
  );

  const contactSection = (
    <Link
      handleSectionClick={handleSectionClick}
      label="Contact"
      data={contact}
      icon={
        <AtSign size={"1em"} strokeWidth={2} color={"rgb(155, 155, 155)"} />
      }
      marginBottom
    />
  );

  const seeMoreSection = (
    <motion.div variants={itemVariant}>
      <div>
        <div className="dr">
          See more of my work on{" "}
          <a
            href={"https://www.github.com/gabcamba/"}
            rel="noopener noreferrer"
            className="lh gr"
          >
            GitHub
          </a>
          <ArrowIcon />
        </div>
        <div className="dr">
          Download my CV{" "}
          <a
            href={pdf}
            rel="noopener noreferrer"
            className="lh gr"
            download="CV-Camba,Alain Gabriel.pdf"
          >
            here
          </a>
          <ArrowIcon />
        </div>
      </div>
    </motion.div>
  );
  const sections = [
    nameSection,
    todaySection,
    expSection,
    projSection,
    contactSection,
    seeMoreSection,
  ];

  return (
    <>
      <motion.div
        variants={appVariant}
        initial="hidden"
        animate="visible"
        className="App"
      >
        {!sectionOpen && sections.map((props, index) => sections[index])}
        <Window open={sectionOpen} toggle={setSectionOpen} content={content} />
      </motion.div>
    </>
  );
}

export default App;
