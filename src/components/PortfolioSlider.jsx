import { MdKeyboardArrowRight } from "react-icons/md";
import portfolio1 from "../assets/images/portfolio-1.jpg";
import SliderComponent from "./SliderComponent";

const img = [
  {
    imgValue: portfolio1,
    link: "",
    text: "Fortezzo Алмазное оборудование",
  },
  {
    imgValue: portfolio1,
    link: "",
    text: "Fortezzo Алмазное оборудование",
  },
];

const PortfolioSlider = () => {
  return (
    <SliderComponent showContent={1}>
      {img.map((item, i) => (
        <a
          key={i}
          className={"carousel-item relative block w-full"}
          target="_blank"
          href="https://google.com"
        >
          <h1 className="mb-5 pl-16 text-lg font-medium text-inkLight">
            {item.text}
          </h1>
          <div className="portfolio-view w-full">
            <div className="absolute left-0 top-10 z-10 flex items-center space-x-2 text-lg font-bold text-white lg:text-2xl">
              <p className="font-bold">Preview</p>
              <MdKeyboardArrowRight className=" text-4xl" />
            </div>
            <img src={item.imgValue} alt="img" className="w-full" />
          </div>
        </a>
      ))}
    </SliderComponent>
  );
};

export default PortfolioSlider;
