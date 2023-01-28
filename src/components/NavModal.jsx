import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navLinks } from "./navLinks";
const NavModal = ({ setOpen }) => {
  return (
    <div className="fixed top-[115px] h-screen w-full border-t-[1px] bg-white xl:hidden">
      <div className="main-container py-[26px]">
        <div className="cursor-pointer" onClick={() => setOpen(false)}>
          <IoClose className="text-4xl" />
        </div>
        <ul className="absolute left-1/2 top-[136px] -translate-x-1/2 text-center">
          <>
            {navLinks.map((link, i) => (
              <Link
                to={link.value}
                className="app__links mb-4 ml-0 block"
                key={i}
                onClick={() => setOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <li className="mx-auto mt-12 text-center text-lg font-bold text-inkLight">
              <a href="" className="mb-4 block text-lg font-bold text-inkLight">
                uc.coding.uz@gmail.com
              </a>
              <a
                href="tel:+998935109545"
                className="text-lg font-bold text-inkLight"
              >
                +998 (93) 510-95-45
              </a>
              <br />
              пн-пт 10:00–19:00
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default NavModal;
