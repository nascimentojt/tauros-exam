import "./Carousel.styles.scss";
import CarouselItem from "./CarouselItem/CarouselItem.component";
import ImgCar0 from "../../res/images/slide-img1.jpg";
import ImgCar1 from "../../res/images/slide-img1.jpg";
import ImgCar2 from "../../res/images/slide-img1.jpg";
import ImgCar3 from "../../res/images/slide-img1.jpg";
import ImgCar4 from "../../res/images/slide-img1.jpg";

const Carousel = () => {
  return (
    <div className="container carousel">
      <h2>Lorem ipsum dolor sit</h2>
      <CarouselItem imgCar={ImgCar0} />
    </div>
  );
};

export default Carousel;
