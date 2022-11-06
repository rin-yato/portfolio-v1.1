import React, { useState } from "react";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import { ButtonBase } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MobileNavDrawer from "./MobileNavDrawer";

function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="md:hidden lg:hidden">
      <ButtonBase className="rounded-full p-0.5" onClick={() => setOpen(true)}>
        <DragHandleRoundedIcon fontSize="large" />
      </ButtonBase>
      <AnimatePresence>
        {open && (
          <MobileNavDrawer
            open={open}
            setOpen={setOpen}
            key={"MobileNavDrawer"}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
