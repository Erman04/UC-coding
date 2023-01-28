import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

function CustomLeftArrow({ className, style, onClick }) {
  return (
    <IoMdArrowDropleftCircle
      style={{
        ...style,
      }}
      className={className}
      onClick={onClick}
    />
  );
}
function CustomRightArrow({ className, style, onClick }) {
  return (
    <IoMdArrowDroprightCircle
      style={{
        ...style,
      }}
      className={className}
      onClick={onClick}
    />
  );
}

const SliderComponent = ({ children, showContent }) => {
  return (
    <Slider
      infinite={false}
      dots
      speed={500}
      slidesToShow={showContent}
      slidesToScroll={1}
      nextArrow={<CustomRightArrow />}
      prevArrow={<CustomLeftArrow />}
    >
      {children}
    </Slider>
  );
};

export default SliderComponent;
