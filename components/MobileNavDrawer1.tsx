import React from "react";
import Link from "next/link";
import { ButtonBase } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


function MobileNavDrawerf({ open, setOpen }: Props) {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 duration-[600ms] ${
        open ? "" : "-translate-y-full delay-[300ms]"
      } bg-black dark:bg-white `}
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
        <div className="flex flex-col mt-20 h-full gap-16">
          <div className="text-white dark:text-black flex justify-center items-center text-5xl font-semibold overflow-hidden">
            <Link
              href={"/"}
              className={`${
                open ? "translate-y-0" : "translate-y-full delay-[0ms]"
              }  duration-500 delay-[400ms]`}
            >
              Home
            </Link>
          </div>
          <div className="text-white dark:text-black flex justify-center items-center text-5xl font-semibold overflow-hidden">
            <Link
              href={"/"}
              className={`${
                open ? "translate-y-0" : "translate-y-full delay-[0ms]"
              } duration-500 delay-[400ms]`}
            >
              Me
            </Link>
          </div>
          <div className="text-white dark:text-black flex justify-center items-center text-5xl font-semibold overflow-hidden">
            <h2
              className={`relative ${
                open ? "translate-y-0" : "translate-y-full delay-[0ms]"
              } duration-500 delay-[400ms]`}
            >
              Work
              <span className="absolute text-sm bg-indigo-600 text-white px-2 rounded-md pb-0.5">
                soon
              </span>
            </h2>
          </div>
          <div className="text-white dark:text-black flex justify-center items-center text-5xl font-semibold overflow-hidden">
            <Link
              href={"/"}
              className={`${
                open ? "translate-y-0" : "translate-y-full delay-[0ms]"
              } duration-500 delay-[400ms]`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNavDrawerf;
