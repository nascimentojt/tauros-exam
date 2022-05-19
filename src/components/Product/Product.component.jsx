import ProductImg from "../../res/images/img-sect2.png";
import "./Product.styles.scss";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useState } from "react";

const Product = () => {
  const [descOne, setDescOne] = useState(false);
  const [descTwo, setDescTwo] = useState(false);

  return (
    <div className="container product">
      <div>
        <img src={ProductImg} alt="Product" />
      </div>
      <div>
        <h2>OVERLINE</h2>
        <h3>Lorem ipsum dolor sit amet consectetur</h3>
        <p className="overline-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          neque eius sapiente excepturi, animi enim magni.
        </p>
        <div className="product-down">
          <h4>Lorem ipsum dolor sit amet.</h4>
          {descOne ? (
            <AiFillCaretUp
              className="product-btns"
              onClick={() => setDescOne(!descOne)}
            />
          ) : (
            <AiFillCaretDown
              className="product-btns"
              onClick={() => setDescOne(!descOne)}
            />
          )}
        </div>
        {descOne ? (
          <p className="product-text-hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            debitis molestiae dolores at doloremque, autem vel id! Velit,
            numquam ab assumenda exercitationem nesciunt sed!
          </p>
        ) : (
          ""
        )}

        <div className="product-down">
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum.</h4>
          {descTwo ? (
            <AiFillCaretUp
              className="product-btns"
              onClick={() => setDescTwo(!descTwo)}
            />
          ) : (
            <AiFillCaretDown
              className="product-btns"
              onClick={() => setDescTwo(!descTwo)}
            />
          )}
        </div>
        {descTwo ? (
          <p className="product-text-hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            tenetur cumque, inventore ratione odit explicabo fugit harum iusto
            veniam non repudiandae suscipit velit quidem.
          </p>
        ) : (
          ""
        )}
        <div className="product-btn-container">
          <button className="product-btn product-btns product-btn-start">
            COMENZAR
          </button>
          <button className="product-btn product-btns product-btn-more">
            CONOCER MÁS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
