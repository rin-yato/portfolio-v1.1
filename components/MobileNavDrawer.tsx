import React from "react";
import Link from "next/link";
import { ButtonBase } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion } from "framer-motion";
import Animation from "../FramerMotion/Animation";
import Transition from "../FramerMotion/Transition";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNavDrawer({ open, setOpen }: Props) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={Animation.NavBarDrawer}
      className={`bg-black fixed top-0 bottom-0 left-0 right-0 dark:bg-white w-full`}
    >
      <div className="flex flex-col px-7 py-7 h-full">
        <div className=" flex justify-end">
          <ButtonBase
            className="rounded-full p-0.5"
            onClick={() => setOpen(false)}
          >
            <CloseRoundedIcon
              fontSize="large"
              className="text-white dark:text-black"
            />
          </ButtonBase>
        </div>
        <motion.div
          variants={Animation.Stagger}
          className="flex flex-col justify-center mt-20 h-full gap-16"
        >
          <div className="text-white dark:text-black flex justify-center items-center text-5xl font-semibold overflow-hidden">
            <motion.div variants={Animation.TextSlideUpSkew}>
              <Link href={"/"}>Home</Link>
            </motion.div>
          </div>
          <div className="text-white dark:text-black flex justify-center items-center text-5xl font-semibold overflow-hidden">
            <motion.div variants={Animation.TextSlideUpSkew}>
              <Link href={"/"}>Me</Link>
            </motion.div>
          </div>
          <div className="text-white dark:text-black flex justify-center items-center text-5xl font-semibold overflow-hidden">
            <motion.h2 variants={Animation.TextSlideUpSkew}>
              Work
              <span className="absolute text-sm bg-indigo-600 text-white px-2 rounded-md pb-0.5">
                soon
              </span>
            </motion.h2>
          </div>
          <div className="text-white dark:text-black flex justify-center items-center text-5xl font-semibold overflow-hidden">
            <motion.div variants={Animation.TextSlideUpSkew}>
              <Link href={"/"}>Contact</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MobileNavDrawer;
