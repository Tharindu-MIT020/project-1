import "./product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description}...</p>

        <p className="info__price">Rs.{price}</p>

        <Link to={`/digital/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
