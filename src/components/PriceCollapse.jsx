import { useContext, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import AppContext from "../context/appContext";

const PriceCollapse = ({ data }) => {
  const { setType, isModal, openModalFunc } = useContext(AppContext);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setType(data.type);
    openModalFunc(true);
    isModal(true);
  };

  return (
    <div className="mx-auto my-5 flex h-full max-w-[334px] flex-col justify-between rounded-lg bg-white py-4 lg:mb-0">
      <div>
        <div className="price-header relative rounded-lg border-b border-dashed border-ink bg-white pb-5 text-center">
          <h1 className=" text-[16px] text-[#7C7C7C]">Услуги</h1>
          <p className="my-2 text-lg font-semibold text-ink">{data.type}</p>
          <h2 className="text-lg text-ink">
            от <span className=" text-2xl font-semibold">{data.price}</span> сум
          </h2>
          <div
            className=" absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer lg:hidden"
            onClick={() => setShow((prev) => !prev)}
          >
            <MdOutlineKeyboardArrowDown className=" text-4xl text-inkLight" />
          </div>
        </div>
        <ul
          className={`${
            show ? "block" : "hidden"
          } overflow-hidden rounded-lg bg-white px-8 py-8  lg:!block`}
        >
          {data.info.map((dataInfo, i) => (
            <li
              key={i}
              className="datas-center mb-3 flex items-center space-x-3 text-xs text-ink"
            >
              {" "}
              <span className="mr-2 block min-h-[12px] min-w-[12px] rounded-full bg-inkLight"></span>{" "}
              {dataInfo}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8">
        <button
          onClick={handleClick}
          className="my-5 w-full rounded bg-[#43CD93] py-[22px] text-sm font-bold text-white"
        >
          Заказать
        </button>
      </div>
    </div>
  );
};

export default PriceCollapse;
