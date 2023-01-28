import landingBg from "../assets/images/landing-bg.png";
import landing from "../assets/images/landing-img.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const Landing = () => {
  return (
    <section className="relative mt-[115px] w-full py-[67px]" id="home">
      {/* <div className="main-container relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:-top-20 lg:translate-x-0">
          <img src={landingBg} alt="landingbg" className="max-w-[55rem]" />
          <h1 className="  inline-block text-6xl">fjlsafjlska</h1>
        </div>
      </div> */}
      <Scroll
        to="next-section"
        spy={true}
        smooth={true}
        duration={500}
        offset={-150}
        className="absolute left-1/2 -bottom-16 -translate-x-1/2  cursor-pointer"
      >
        <MdOutlineKeyboardArrowDown className="text-4xl text-inkLight" />
      </Scroll>
      <div className="main-container flex">
        <div className="relative z-10 w-full xl:w-3/5">
          <div>
            <h1 className="font-bold text-ink sm:text-2xl md:text-[28px] lg:mb-8 lg:text-[32px]">
              Разработка web-сайтов, SEO продвижение,{" "}
              <br className="hidden xl:block" />
              <span className="font-bold text-inkLight">CRM-система</span>
            </h1>
            <div className="md:-translate-y-15 min-w-full lg:hidden">
              <img src={landing} alt="landing" className="w-full" />
            </div>
            <p className="text-[16px] text-ink lg:w-[35%] xl:w-2/3">
              <span className="text-inkLight">UC Coding</span> молодая дружная
              команда которое занимается разработкой веб-сайтов, SEO
              продвижением, CRM-система. <br />
              <span className="text-inkLight">UC Coding</span> создаст вам
              креативные проекты которыми будите пользоваться с удовольствием.{" "}
              {""}
            </p>
          </div>
          <div className="mt-[116px]">
            <div className="text-center lg:text-left">
              <Link
                to="/price"
                className="rounded bg-inkLight py-5 px-[72px] font-semibold text-white hover:bg-inkHover"
              >
                Узнать стоимость
              </Link>
            </div>
            <p className="mt-8 text-center text-[16px] font-medium tracking-tight text-ink lg:w-[30%] lg:text-left xl:w-[65%]">
              <span className="font-medium text-inkLight">
                Оставьте заявку и получите бесплатную консультацию от
                специалиста, полный расчет стоимости разработки.
              </span>
            </p>
          </div>
        </div>
        <div className="relative xl:w-2/5">
          <div className="absolute -top-10 right-0 hidden w-[75vw] lg:top-4 lg:block lg:w-[35rem] xl:-top-[3.6rem] xl:right-0 xl:w-[50rem]">
            <img src={landing} alt="" className="inline-block w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
