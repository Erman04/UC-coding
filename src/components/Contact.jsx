import contactHandImg from "../assets/images/contact-hand.png";
import contactBg from "../assets/images/contact-bg.png";

import { useContext, useEffect, useState } from "react";
import AppContext from "../context/appContext";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [nameValidation, setNameValidation] = useState(false);
  const [numberValidation, setNumberValidation] = useState(false);
  const { sendMessage, nameValidate, numberValidate } = useContext(AppContext);

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setInputNumber(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  useEffect(() => {
    if (inputNumber) numberValidate(inputNumber, setNumberValidation);
  }, [inputNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let resText = `zakaz %0A %0A Result is: %0A ${encodeURI(
      "👤"
    )} Name: ${encodeURI(inputName)} %0A ${encodeURI(
      "📞"
    )} Tel Number: ${inputNumber} %0A ${encodeURI("📝")}  Message: ${encodeURI(
      textareaValue
    )}`;
    sendMessage(resText);
    setInputName("");
    setInputNumber("");
    setTextareaValue("");
  };

  return (
    <section id="contact">
      <div className="main-container">
        <div className="relative w-full items-center justify-between rounded-[20px] bg-[#F4F8FF] px-2 pb-32 pt-8 text-center md:px-6 lg:flex lg:space-x-5 lg:px-[98px] lg:text-left">
          <div className="absolute bottom-2 left-0 max-w-[18rem] ">
            <img src={contactHandImg} alt="handimg" />
          </div>
          <div className="absolute bottom-5 right-4 hidden max-w-[7rem] md:block">
            <img src={contactBg} alt="handimg" className="w-full" />
          </div>
          <div className="mb-7 lg:mb-0 lg:w-1/2">
            <h1 className="mb-5 text-4xl font-bold text-ink">
              Компания UCCoding
            </h1>
            <p className="text-lg text-ink">
              Это дорогая и долгая разработка интернет-магазинов на 1С Битрикс!
              Нельзя сделать <span className="font-semibold">качественный</span>{" "}
              цифровой продукт за дешево и быстро! <br /> <br />
              Мы создадим интернет-магазин с нуля. Заказчику не придется искать
              других IT-специалистов для дальнейшей настройки и запуска сайта.
              Мы настроим сервисы, интегрируем модули для онлайн-торговли,
              добавим контент и товары. Работы по созданию интернет-магазина с
              нуля ведутся только после анализа ниши бизнеса.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-[20px] bg-inkLight px-4 pt-12 pb-9 md:mx-auto md:w-4/5 md:px-16">
              <div className="mb-10">
                <h1 className="text-center text-2xl font-bold text-white">
                  Звоните нам по телефону
                  <br /> +998 (93) 510-95-45
                </h1>
                <p className=" mt-6 text-center text-xs text-white">
                  или закажите обратный звонок чтобы получить ответы на все
                  интересующие вас вопросы.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div
                  className={`mb-3 rounded ${nameValidation && "bg-white"} p-1`}
                >
                  <input
                    required
                    type="text"
                    className={`form-input !m-0 ${
                      nameValidation && "text-ink"
                    }`}
                    value={inputName}
                    placeholder="Введите ваше имя"
                    style={{
                      borderColor: "rgba(255,255,255,0.4)",
                    }}
                    onChange={handleNameChange}
                    onBlur={() => nameValidate(inputName, setNameValidation)}
                  />
                  {nameValidation && (
                    <span className="text-sm text-red-600">
                      Character must be 4-22
                    </span>
                  )}
                </div>
                <div
                  className={`mb-3 rounded ${
                    numberValidation && "bg-white"
                  } p-1`}
                >
                  <input
                    required
                    type="text"
                    className={`form-input !m-0 ${
                      numberValidation && "text-ink"
                    }`}
                    value={inputNumber}
                    onChange={handleNumberChange}
                    onBlur={() =>
                      numberValidate(inputNumber, setNumberValidation)
                    }
                    placeholder="+998 (99) 999-99-99"
                    style={{
                      borderColor: "rgba(255,255,255,0.4)",
                    }}
                  />
                  {numberValidation && (
                    <span className="text-sm text-red-600">
                      Something went wrong!
                    </span>
                  )}
                </div>
                <textarea
                  value={textareaValue}
                  onChange={handleTextAreaChange}
                  className="form-input max-h-[9rem]"
                  style={{
                    borderColor: "rgba(255,255,255,0.4)",
                  }}
                  placeholder="Message..."
                ></textarea>
                <button
                  type="submit"
                  disabled={
                    numberValidation ||
                    nameValidation ||
                    !inputName ||
                    !inputNumber
                  }
                  className="mt-7 w-full rounded-[5px] bg-white py-5 font-semibold text-inkLight disabled:bg-[#bdbcbc]"
                >
                  Перезвоните мне
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
