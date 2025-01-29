import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = () => {
    const { productId } = useParams();
    const { all_product, addToCart } = useContext(ShopContext);

    // Convert productId to a number for correct comparison
    const product = all_product?.find((item) => item.id === Number(productId));

    // If product is not found
    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={product.image || "fallback.jpg"} alt={`Preview ${index}`} />
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img src={product.image || "fallback.jpg"} alt={product.name} className="productdisplay-main-img" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    {[...Array(4)].map((_, index) => <img key={index} src={star_icon} alt="star" />)}
                    <img src={star_dull_icon} alt="dull star" />
                    <p>(122)</p>
                </div>
                <p className="productdisplay-right-price">
                    <span className="original-price">${product?.originalPrice ?? "N/A"}</span> 
                    <span className="discounted-price">${product?.discountedPrice ?? "N/A"}</span>
                </p>
                <p className="productdisplay-right-description">
                    {product.description}
                </p>
                <h2>Select Size</h2>
                <div className="productdisplay-right-size">
                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                        <div key={size}>{size}</div>
                    ))}
                </div>
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category:</span> {product.category}</p>
                <p className="productdisplay-right-category"><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
