// import SearchIcon from "../public/icons/search-icon.png";
import Image from "next/image";
import AppLogo from "../public/logo/app-logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const ref = useRef<null | HTMLDivElement>(null);
  const auth = getAuth();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened
      });
  };

  return (
    <header className="bg-white shadow shadow-indigo-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 space-x-8 lg:px-8"
        aria-label="Global"
      >
        {/* logo */}
        <div className="flex items-center gap-x-1">
          <Image src={AppLogo} alt={"logo"} height={50} />
          <a href="#" className="-m-1.5 p-1.5">
            <div className="text-indigo-700 font-bold text-lg">
              MY NOTES
            </div>
            <div className="text-indigo-600 text-xs">
              Simple & Quick Note Taking
            </div>
          </a>
        </div>

        {/* search bar */}
        {/* <div className="flex lg:flex-1 bg-slate-100 p-2 rounded-md justify-between">
          <input
            className="grow bg-slate-100 border-0 outline-0"
            placeholder="Search here"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="grey"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div> */}

        {/* account avatar */}
        <div ref={ref}>
          <div
            className="peer lg:justify-end cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <div className=" flex -space-x-2 overflow-hidden bg-slate-200 hover:bg-slate-300 rounded-full p-2">
              <p className="text-indigo-500 text-sm">WA</p>
            </div>
          </div>

          {/* account menu */}
          {/* <!--
          'Product' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        --> */}
          {showMenu && (
            <div className="peer-hover:flex absolute -right-0 top-10 z-10 mt-5 max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="py-2">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <svg
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div
                      className="block font-semibold text-gray-900"
                      onClick={onLogout}
                    >
                      Logout
                      <span className="absolute inset-0"></span>
                    </div>
                    {/* <p className="mt-1 text-gray-600">Get a better understanding of your traffic</p> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
