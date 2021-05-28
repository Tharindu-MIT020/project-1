import React from 'react'
import product_card from "./data/product_data"
import './main.css';

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
            <div className="btn">Add to cart</div>
        </div>

        </div>
       
    );
    return(
        <div className="container">
        <div className="main_content">
            <h3 className="h3">Digital</h3>
            {listItem}
        </div>
        </div>
    )
}
export default MainContent;