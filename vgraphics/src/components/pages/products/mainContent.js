import React from 'react'
import product_card from "./data/product_data"
import './main.css';
import { Link } from 'react-router-dom';

const MainContent = () => {
    console.log(product_card);
    const listItem = product_card.map((item) =>
    
        <div className="card" key={item.id}> 
        <div className="card-img">
            <img src={item.tumb} />
        </div>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className="price">{item.Price}</p>
            <div className="btn"><Link to="/" > Add to cart </Link></div>
            <br></br>
            <div className="btn"><Link to="/view" > View </Link></div>
        </div>

        </div>
       
    );
    return(
        <div className="container">
        <div className="main_content">
            <h3 className="h3">VCard</h3>
            {listItem}
        </div>
        </div>
    )
}
export default MainContent;