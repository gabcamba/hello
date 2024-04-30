import React from "react";
import { motion } from "framer-motion";

const Link = ({
  handleSectionClick,
  label,
  data,
  icon,
  marginTop = false,
  marginBottom = false,
}) => {
  const itemVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 5 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      style={{
        width: "fit-content",
        cursor: "pointer",
        marginTop: marginTop ? 50 : 0,
        marginBottom: marginBottom ? 50 : 0,
      }}
      whileTap={{
        y: 15,
        transition: { duration: 0.5 },
      }}
      variants={itemVariant}
    >
      <div
        onClick={() => handleSectionClick(true, data)}
        style={{
          "-webkit-tap-highlight-color": "transparent",
        }}
        className="sc"
      >
        <motion.div
          whileHover={{
            scale: 1.06,
            color: "cornflowerblue",
            transition: { duration: 1, type: "spring" },
          }}
          whileTap={{
            y: 15,
            transition: { duration: 0.5 },
          }}
          className="fl"
        >
          {icon}
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Link;
