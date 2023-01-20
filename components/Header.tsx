import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ open, setOpen }: Props) {
  const router = useRouter();
  const currentPage = router.pathname;
  const [page, setPage] = React.useState("home");

  React.useEffect(() => {
    if (currentPage === "/") {
      setPage("home");
    }
    if (currentPage === "/me") {
      setPage("me");
    }
  }, [currentPage]);

  return (
    <div
      className="flex justify-between items-center px-7 py-7 lg:px-16 lg:py-10 "
      data-scroll-section
      data-scroll
    >
      <div className="relative" data-scroll>
        <Link
          href={"/"}
          onClick={() => setPage("home")}
          className=" font-medium hover:text-slate-300 duration-300 text-black"
        >
          HOME
        </Link>
        <span
          className={`${
            page === "home" ? "" : "hidden"
          } absolute w-2/5 h-1 rounded-full bg-indigo-600 duration-200 top-full left-1/2 -translate-x-1/2`}
        ></span>
      </div>

      {/* Hidden Full Navigation, Show On Large Screen */}
      <div className="hidden gap-16 md:flex lg:flex " data-scroll>
        <div className="relative" data-scroll>
          <Link
            href={"/me"}
            onClick={() => setPage("me")}
            className=" font-medium hover:text-slate-300 duration-300"
          >
            ME
          </Link>
          <span
            data-scroll
            className={`${
              page === "me" ? "" : "hidden"
            } absolute w-2/5 h-1 rounded-full bg-indigo-600 duration-200 top-full left-1/2 -translate-x-1/2`}
          ></span>
        </div>
        <div className="relative" data-scroll>
          <a
            data-scroll
            href="https://t.me/rinyato"
            className=" font-medium hover:text-slate-300 duration-300"
          >
            CONTACT
          </a>
          <span
            data-scroll
            className={`${
              page === "contact" ? "" : "hidden"
            } absolute w-2/5 h-1 rounded-full bg-indigo-600 duration-200 top-full left-1/2 -translate-x-1/2`}
          ></span>
        </div>
        {/* <--End--> */}
      </div>
      <MobileNav open={open} setOpen={setOpen} page={page} setPage={setPage} />
    </div>
  );
}

export default Header;
