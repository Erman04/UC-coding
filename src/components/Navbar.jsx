import { FaTelegram } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import NavModal from "./NavModal";
import { navLinks } from "./navLinks";
import { useContext, useState } from "react";
import { Link as Scroll } from "react-scroll";
import logo from "../assets/images/logo2.png";
import { Link, NavLink } from "react-router-dom";
import AppContext from "../context/appContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { openModalFunc, isModal } = useContext(AppContext);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-[100px] w-full items-center bg-white shadow-sm m-auto" style={{ maxWidth: '1930px' }}>
        <div className=" w-full
         flex items-center justify-around">
          <div
            className="hamburger xl:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <div>
              <span className="hamburger-item"></span>
              <span className="hamburger-item"></span>
              <span className="hamburger-item"></span>
            </div>
          </div>
          <div className="flex items-center">
            <NavLink to={"/"} className="h-[58px] w-[250px] items-center ">
              <img src={logo} alt="logo" className=" w-full" />
            </NavLink>
            <ul className="hidden font-bold xl:flex">
              {navLinks.map((link, i) => (
                <li className="" key={i}>
                  <NavLink
                    className="app__links cursor-pointer flex items-center "
                    to={`/${link.value}`}
                    style={({ isActive }) => ({
                      color: isActive ? "#6B5AF9" : "#2A2367",
                      borderBottom: "2px solid white",
                      borderColor: isActive ? "#6B5AF9" : "white",
                    })}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden xl:flex">
            <div className="mr-5 text-end my-3">
              <div className="flex items-center">
                {/* <a href="">
                  <FaTelegram className="text-[#707070]" />
                </a> */}
                <a
                  href="tel:+998935109545"
                  className="ml-5 text-1xl flex font-bold items-center text-ink"
                >
                  +998 (93) 510-95-45
                </a>
              </div>
              <div>
                <p className="text-xs font-bold text-ink">
                  Ежедневно с 09:00 до 18:00
                </p>
              </div>
            </div>
            <button
              className="rounded bg-inkLight px-[30px] py-[22px] font-bold text-white hover:bg-inkHover"
              onClick={() => {
                openModalFunc(true);
                isModal(false);
              }}
            >
              Заказать звонок
            </button>
          </div>
          <div
            onClick={() => {
              openModalFunc(true);
              isModal(false);
            }}
            className="flex h-[38.75px] w-[62px] cursor-pointer items-center justify-center rounded bg-inkLight hover:bg-inkHover xl:hidden"
          >
            <BsFillTelephoneFill className="text-lg text-white" />
          </div>
        </div>
      </nav>
      <div className={`relative z-50`}>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NavModal setOpen={setOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
