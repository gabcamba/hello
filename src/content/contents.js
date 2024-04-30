import { Briefcase, Sparkles, AtSign, Box } from "lucide-react";
import { motion } from "framer-motion";
import ArrowIcon from "../components/ArrowIcon";
export const today = {
  header: (
    <div className="fl">
      <motion.div className="icw">
        <Sparkles size={15} strokeWidth={2} color={"rgb(155, 155, 155)"} />
      </motion.div>
      Today
    </div>
  ),
  body: (
    <div className="gr bal lh">
      I work as an Engineer building web applications at{" "}
      <a
        href={"https://research.samsung.com/srph"}
        rel="noopener noreferrer"
        className="lh"
      >
        Samsung R&D Institute Philippines (SRPH)
      </a>
      . I like to build apps, and think passionately about the UI, how it looks,
      feels, and behaves.
    </div>
  ),
};

export const experience = {
  header: (
    <div className="fl">
      <motion.div className="icw">
        <Briefcase size={15} strokeWidth={2} color={"rgb(155, 155, 155)"} />
      </motion.div>
      Experience
    </div>
  ),
  body: (
    <div style={{ display: "flex", gap: 50, flexDirection: "column" }}>
      <div>
        <a
          href={"https://research.samsung.com/srph"}
          rel="noopener noreferrer"
          className="lh"
        >
          Samsung R&D Institute Philippines
        </a>
        <ArrowIcon />
        <div className="lh gr">Manila • Hybrid</div>
        <div className="lh gr">Engineer, Frontend</div>
        <div className="lh gr">2022-Present</div>
      </div>
      <div>
        <a
          href={"https://www.lastmile.ph/"}
          rel="noopener noreferrer"
          className="lh"
        >
          Last Mile, Inc.
        </a>
        <ArrowIcon />
        <div className="lh gr">Manila • Remote</div>
        <div className="lh gr">Lead Developer, Web and Mobile</div>
        <div className="lh gr">2020-2022</div>
      </div>
      <div>
        <a
          href={"https://www.linkedin.com/company/codegum/about/"}
          rel="noopener noreferrer"
          className="lh"
        >
          Codegum, Inc.
        </a>
        <ArrowIcon />
        <div className="lh gr">Manila • Onsite</div>
        <div className="lh gr">Junior Engineer, Full Stack</div>
        <div className="lh gr">2019-2020</div>
      </div>
    </div>
  ),
};

export const projects = {
  header: (
    <div className="fl">
      <motion.div className="icw">
        <Box size={16} strokeWidth={2} color={"rgb(155, 155, 155)"} />
      </motion.div>
      Projects
    </div>
  ),
  body: (
    <div style={{ display: "grid", placeContent: "center", gap: 20 }}>
      <div>
        <a
          href="https://support.samsungcloud.com/#/info"
          rel="noopener noreferrer"
          className="lh"
        >
          Samsung Cloud
        </a>
        <ArrowIcon />
        <div className="lh gr">Samsung Electronics</div>
      </div>

      <div>
        <a
          href="https://www.samsung.com/global/galaxy/apps/quick-share/"
          rel="noopener noreferrer"
          className="lh"
        >
          Samsung Quick Share
        </a>
        <ArrowIcon />
        <div className="lh gr">Samsung Electronics</div>
      </div>
      <div>
        <a
          href="https://www.fleet.ph/"
          rel="noopener noreferrer"
          className="lh"
        >
          Fleet PH (Web and Mobile)
        </a>
        <ArrowIcon />
        <div className="lh gr">Last Mile, Inc.</div>
      </div>
    </div>
  ),
};
export const contact = {
  header: (
    <div className="fl">
      <motion.div className="icw">
        <AtSign size={15} strokeWidth={2} color={"rgb(155, 155, 155)"} />
      </motion.div>
      Contact
    </div>
  ),
  body: (
    <>
      <div>
        <a
          href="mailto:gcamba08@gmail.com"
          rel="noopener noreferrer"
          className="lh gr"
        >
          Email
        </a>
        <ArrowIcon />
      </div>
      <div>
        <a
          href={"https://www.linkedin.com/in/gabcamba/"}
          rel="noopener noreferrer"
          className="lh gr"
        >
          LinkedIn
        </a>
        <ArrowIcon />
      </div>
    </>
  ),
};
