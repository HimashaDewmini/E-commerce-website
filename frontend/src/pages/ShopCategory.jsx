import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const location = useLocation(); // Detect URL change

  // Re-render the component when the location changes
  useEffect(() => {}, [location]);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" className="" />
        </div>
      </div>


      <div className="shopcategory-products">
        {all_product
          .filter((item) => props.category === item.category) 
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}

          

      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;

