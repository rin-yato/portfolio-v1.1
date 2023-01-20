import React, { useState } from "react";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import { ButtonBase } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MobileNavDrawer from "./MobileNavDrawer";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function MobileNav({ open, setOpen, page, setPage }: Props) {
  return (
    <div className="md:hidden lg:hidden">
      <ButtonBase className="rounded-full p-0.5" onClick={() => setOpen(true)}>
        <DragHandleRoundedIcon fontSize="large" />
      </ButtonBase>
    </div>
  );
}

export default MobileNav;
