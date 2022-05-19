import "./Main.styles.scss";
import ImgVideo from "../../res/images/img-video.jpg";
import BtnPlay from "../../res/images/btn-play.png";
import { GrShare } from "react-icons/gr";

const Main = () => {
  return (
    <div className="container main">
      <div className="brand-imgs">
        <img src={ImgVideo} alt="Brand Main" className="brand-img" />
        <img src={BtnPlay} alt="Play Button" className="brand-btn-play" />
      </div>
      <div className="main-text-content">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
          consequatur laborum inventore officiis tenetur exercitationem
          architecto.
        </p>
        <button>
          CONTACTO <GrShare className="icon-share" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Main;
