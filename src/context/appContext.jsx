import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isModalProject, setIsModalProject] = useState(false);
  const [projectType, setProjectType] = useState("");

  // const selectProject = {
  //   type: '',

  // }

  const openModalFunc = (newState) => {
    setOpenModal(newState);
  };

  const isModal = (newState) => {
    setIsModalProject(newState);
  };

  const setType = (newState) => {
    setProjectType(newState);
  };

  const nameValidate = (name, validate) => {
    if (name.length >= 4) {
      validate(false);
    } else {
      validate(true);
    }
  };

  const numberValidate = (number, validate) => {
    const re = /^[+0-9]{7,15}$/;

    if (!re.test(number)) {
      validate(true);
    } else {
      validate(false);
    }
  };

  const sendMessage = (text) => {
    const success = () => toast.success("Your message successfully sended!");
    const error = () => toast.error("Something went wrong!");
    const token = import.meta.env.VITE_BOT_TOKEN;
    const chat_id = -1001668676362;

    axios
      .get(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`
      )
      .then(() => {
        success();
      })
      .catch(() => {
        error();
      });
  };

  return (
    <AppContext.Provider
      value={{
        numberValidate,
        openModalFunc,
        nameValidate,
        sendMessage,
        isModal,
        setType,
        openModal,
        isModalProject,
        projectType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
