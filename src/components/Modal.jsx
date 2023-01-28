import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCheckCircle } from "react-icons/ai";
import AppContext from "../context/appContext";

const Modal = () => {
  const {
    openModal,
    openModalFunc,
    sendMessage,
    nameValidate,
    numberValidate,
    isModalProject,
    projectType,
  } = useContext(AppContext);
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [nameValidation, setNameValidation] = useState(false);
  const [numberValidation, setNumberValidation] = useState(false);
  console.log(isModalProject);

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
    let resText = `zakaz %0A %0A Result is: ${
      isModalProject ? `%0A Project type: ${encodeURI(projectType)} %0A` : ""
    } %0A ${encodeURI("👤")}  Name: ${encodeURI(inputName)} %0A ${encodeURI(
      "📞"
    )} Tel Number: ${inputNumber} %0A ${encodeURI("📝")}  Message: ${encodeURI(
      textareaValue
    )}`;
    sendMessage(resText);
    setInputName("");
    setInputNumber("");
    setTextareaValue("");
    setTimeout(() => {
      openModalFunc(false);
    }, 500);
  };

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: "rgba(0, 0, 0, 0.2)",
          }}
          className="fixed top-0 left-0 right-0 z-[300] h-screen w-full"
        >
          <div
            className=" absolute top-0 left-0 h-full w-full "
            onClick={() => openModalFunc(false)}
          ></div>
          <div className="absolute top-1/2 left-1/2 z-[400] w-[95%] -translate-x-1/2 -translate-y-1/2 md:w-[500px] xl:w-[600px]">
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              exit={{ x: -50 }}
              className=" h-full w-full rounded-[10px]  bg-white"
            >
              <GrFormClose
                onClick={() => openModalFunc(false)}
                className=" absolute right-4 top-4 cursor-pointer text-4xl text-black"
              />
              <div className="mx-auto w-[95%] py-7 md:w-4/6">
                <div className="mb-7">
                  <h1 className="text-center text-lg font-bold text-ink lg:text-2xl">
                    Заявка на консультацию
                  </h1>
                  {isModalProject && (
                    <span className="flex items-center justify-center text-center font-semibold text-[#43CD93]">
                      Вы выбрали {projectType} тариф{" "}
                      <AiOutlineCheckCircle className="ml-4 rounded-full bg-[#43CD93] text-[20px] text-white" />
                    </span>
                  )}
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-7">
                    <label
                      htmlFor="name"
                      className="text-lg font-medium text-[#7E7E7E]"
                    >
                      Ваше имя
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      className={`form-input mt-3 text-ink ${
                        nameValidation && "!border-red-600"
                      }`}
                      placeholder="Введите ваше имя"
                      value={inputName}
                      onChange={handleNameChange}
                      onBlur={() => nameValidate(inputName, setNameValidation)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="number"
                      className="text-lg font-medium text-[#7E7E7E]"
                    >
                      Номер телефона
                    </label>
                    <input
                      required
                      type="text"
                      id="number"
                      className={`form-input mt-3 text-ink ${
                        numberValidation && "!border-red-600"
                      }`}
                      placeholder="+998 97 722 42 86"
                      value={inputNumber}
                      onChange={handleNumberChange}
                      onBlur={() =>
                        numberValidate(inputNumber, setNumberValidation)
                      }
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      id="message"
                      className="form-input mt-3 max-h-[8rem] min-h-[3rem] text-ink"
                      placeholder="Message..."
                      value={textareaValue}
                      onChange={handleTextAreaChange}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      disabled={
                        numberValidation ||
                        nameValidation ||
                        !inputName ||
                        !inputNumber
                      }
                      className="w-full rounded-[6px] bg-inkLight py-5 font-bold text-white hover:bg-inkHover disabled:opacity-[0.6]"
                    >
                      Отправить
                    </button>
                    <p className=" mt-[13px] text-xs text-[#9895B4]">
                      Нажимая на кнопку «Отправить заявку», я даю согласие на
                      обработку персональных данных и соглашаюсь c политикой
                      конфиденциальности
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
