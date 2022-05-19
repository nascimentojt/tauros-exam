import "./CarouselItem.styles.scss";
import { AiFillCaretRight } from "react-icons/ai";
import { FaCalendarDay } from "react-icons/fa";

const CarouselItem = ({ imgCar }) => {
  return (
    <div className="carousel-item">
      <img src={imgCar} alt="" />
      <div className="carousel-item-desc">
        <h3>Lorem ipsum dolor sit amet</h3>
        <AiFillCaretRight />
      </div>
      <div className="carousel-item-comp">
        <FaCalendarDay />
        <p>Lorem ipsum dolor</p>
        <button>2020</button>
      </div>
    </div>
  );
};

export default CarouselItem;
