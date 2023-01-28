import { useContext } from "react";
import { FaTelegram, FaInstagram, FaDiscord, FaFacebook, FaGithub } from "react-icons/fa";
import logoText from "../assets/images/logo-text.png";
import logo from "../assets/images/logo-white.png";
import AppContext from "../context/appContext";

const Footer = () => {
  const { openModalFunc } = useContext(AppContext);
  return (
    <footer className="bg-ink py-6">
      <div className="main-container">
        <div className="items-end justify-between lg:flex">
          <div className="mt-0 flex items-center justify-between w-full">
            <h1 className="text-3xl font-bold text-white mb-2">Напишите нам</h1>
            <p className="mb-2 text-2xl font-bold text-inkLight md:text-3xl lg:text-[34px]">
              uc.coding.uz@gmail.com
            </p>
          </div>
        </div>
        <div className="my-3 h-[1px] w-full bg-inkLight"></div>
        <div className="justify-between md:flex">
          <div>
            <p className=" text-white">Tашкент янгибозор</p>
            <p className="mt-4 text-white">
              <span className="mr-1.5 text-xl">+998 (93) 510-95-45 </span>
              <span className="ml-1.5"> пн-пт 10:00–19:00</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-8">
            <a href="">
              <FaTelegram className=" text-4xl text-white" />
            </a>
            <a href="">
              <FaInstagram className=" text-4xl text-white" />
            </a>
            <a href="">
              <FaFacebook className=" text-4xl text-white hover:text-red" />
            </a>
            <a href="">
              <FaGithub className=" text-4xl text-white hover:text-primary" />
            </a>

          </div>
        </div>
        <div className="text-center">
          {/* <div className="my-4 flex justify-center space-x-3">
            <img className="min-w-[70px] max-w-[70px]" src={logo} alt="logo" />
            <img className="w-[14rem] object-cover" src={logoText} alt="logo" />
          </div> */}
          <p className=" mb-4 mt-6 text-white">
            © {new Date().getFullYear()} | UC Coding - создание сайтов и
            телеграм ботов
          </p>
          <span className="text-white underline">
            Политика конфиденциальности
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
