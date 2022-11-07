import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ open, setOpen }: Props) {
  const [page, setPage] = React.useState("home");
  return (
    <div className="flex justify-between items-center px-7 py-7 lg:px-16 lg:py-10 ">
      <div>
        <div className="relative">
          <Link
            href={"/"}
            onClick={() => setPage("home")}
            className=" font-medium hover:text-slate-300 duration-300"
          >
            HOME
          </Link>
          <span
            className={`${
              page === "home" ? "" : "hidden"
            } absolute w-2/5 h-1 rounded-full bg-indigo-600 duration-200 top-full left-1/2 -translate-x-1/2`}
          ></span>
        </div>
      </div>

      {/* Hidden Full Navigation, Show On Large Screen */}
      <div className="flex gap-16 invisible md:visible lg:visible ">
        <div className="relative">
          <Link
            href={"/me"}
            onClick={() => setPage("me")}
            className=" font-medium hover:text-slate-300 duration-300"
          >
            ME
          </Link>
          <span
            className={`${
              page === "me" ? "" : "hidden"
            } absolute w-2/5 h-1 rounded-full bg-indigo-600 duration-200 top-full left-1/2 -translate-x-1/2`}
          ></span>
        </div>
        <div className="relative">
          <a
            href="https://t.me/rinyato"
            className=" font-medium hover:text-slate-300 duration-300"
          >
            CONTACT
          </a>
          <span
            className={`${
              page === "contact" ? "" : "hidden"
            } absolute w-2/5 h-1 rounded-full bg-indigo-600 duration-200 top-full left-1/2 -translate-x-1/2`}
          ></span>
        </div>
        {/* <--End--> */}
      </div>
      <MobileNav open={ open } setOpen={ setOpen } page={ page } setPage={ setPage } />
    </div>
  );
}

export default Header;
