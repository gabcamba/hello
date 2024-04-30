import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleArrowLeft } from "lucide-react";
import Favicon from "../img/fav512.png";
const Window = ({ toggle, open, content }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="wd"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            duration: 0.75,
          }}
        >
          <div className="wn">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 50,
                alignItems: "flex-start",
              }}
            >
              <motion.button
                className="cl"
                style={{
                  background: "transparent",
                  outline: "none",
                  border: "none",
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() => toggle(false, null)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  type: "spring",
                  duration: 0.7,
                }}
                whileHover={{
                  scale: 1.5,
                  transition: { duration: 0.5, type: "spring" },
                  color: "cornflowerblue",
                }}
                whileTap={{
                  scale: 0.8,
                  transition: { duration: 0.5 },
                }}
              >
                <CircleArrowLeft size={30} strokeWidth={1} />
                <img
                  style={{ height: "2.5em", width: "2.5em", opacity: "0.9", marginLeft: '1em' }}
                  alt="icon"
                  src={Favicon}
                />
              </motion.button>
              {content.header}
            </div>
            {content.body}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window;
