import "./cartitem.css";
import {Link} from 'react-router-dom';


const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return(
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.name}></img>

            </div>
           <Link to={`/digital/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
            <p className="cartitem__price">${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
         <option key value="1">1</option>
         <option key value="2">2</option>
         <option key value="3">3</option>
         <option key value="4">4</option>
         <option key value="5">5</option>
        
      </select>
            <button className="cartitem__deleteBtn" onClick={() => removeHandler(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
};

export default CartItem;