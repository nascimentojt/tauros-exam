import FlowLogo from "../../res/images/Logo-1.png";
import "./Footer.styles.scss";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer hero">
      <div className="container">
        <div className="footer-top">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
            recusandae rerum!
          </h2>
          <p className="footer-legend">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            pariatur aliquid et! Officia, placeat voluptatem ipsa asperiores sed
            id.
          </p>
          <div>
            <form>
              <input type="email" name="email" id="email" placeholder="Email" />
              <input type="submit" value="SUSCRIBIRSE" />
            </form>
          </div>
        </div>
        <footer>
          <div className="footer-left">
            <img src={FlowLogo} alt="Flow logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nesciunt ipsam inventore doloribus!
            </p>
            <div className="icons-footer">
              <FaFacebookF className="icon-footer" />
              <FaTwitter className="icon-footer" />
              <FaLinkedinIn className="icon-footer" />
            </div>
          </div>
          <div className="footer-right">
            <div>
              <h3>Ubicación</h3>
              <p>América</p>
              <p>Asia</p>
              <p>Europa</p>
            </div>
            <div>
              <h3>Contacto</h3>
              <p>Nosotros</p>
              <p>Equipo</p>
              <p>Historia</p>
            </div>
            <div>
              <h3>Legales</h3>
              <p>Política de Privacidad</p>
              <p>Términos y Condiciones</p>
              <p>Responsiva</p>
            </div>
          </div>
        </footer>
        <p className="footer-reserved">
          2022 Flow&#174; los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
