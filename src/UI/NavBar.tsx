import { useState } from "react";
import img from "/img/pec-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  // scrolling
  const [navbgcolor, setNavBgColor] = useState(false);

  const changeNavBgColor = () => {
    if (window.scrollY >= 150) {
      setNavBgColor(true);
    } else {
      setNavBgColor(false);
    }
  };

  window.addEventListener("scroll", changeNavBgColor);
  return (
    <header
      className={`${
        navbgcolor ? "trans-bg" : ""
      } flex w-full items-center bg-dark dark:bg-dark fixed h-16 z-50`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-2">
              <img src={img} alt="logo" />
            </a>
          </div>
          <div className="flex w-full items-center justify-end px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <GiHamburgerMenu fill="white" />
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg text-white px-6 shadow dark:bg-dark lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/">Home</ListItem>
                  <ListItem NavLink="/events">Events</ListItem>
                  <ListItem NavLink="/about">About</ListItem>
                  <a
                    href="https://docs.google.com/forms/d/1AbraNRR2x8-QYULluq9lxsc4mNMOOMPdd94Q9GEsPZE/viewform?edit_requested=true"
                    target="_blank"
                  >
                    <h1 className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex">
                      Register
                    </h1>
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem: React.FC<{
  children: React.ReactNode;
  NavLink: React.ReactNode;
}> = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink as string}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
