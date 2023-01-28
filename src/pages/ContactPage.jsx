import { FaInstagram, FaTelegram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <link rel="canonical" href="https://uc-coding.uz/contact" />
        <meta
          name="description"
          content="Connect with me and solve your business problem"
        />
      </Helmet>
      <section className="mt-[100px] py-14">
        <div className="main-container">
          <h1 className=" mb-20 text-4xl font-bold text-ink">
            Контактная{" "}
            <span className=" font-bold text-inkLight">информация</span>
          </h1>

          <div className="items-center justify-between lg:flex">
            <div className="lg:w-2/5">
              <p className="text-[20px] font-bold text-ink">
                +998 (93) 510-95-45
                <br /> <br />
                uc.coding.uz@gmail.com
                <br /> <br />
                Tашкент янгибозор
              </p>
              <div className="mt-6 flex space-x-6">
                <FaTelegram className=" text-3xl text-inkLight " />
                <a href="https://www.instagram.com/uccoding.uz/">
                  <FaInstagram className=" text-3xl text-inkLight " />
                </a>
              </div>
            </div>
            <div className="mt-5 w-full lg:mt-0 lg:w-3/5">
              <iframe
                src="https://yandex.uz/map-widget/v1/-/CCGLEVJy"
                width="100%"
                height="420px"
                frameBorder="1"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
