import ButtonComponent from "../button-component/button.component";
import "./product-card.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({product})=>{
    const {addItemToCart} = useContext(CartContext);
    console.log(product);

    const {name,price, imageUrl} = product;

    const addProductToCart = ()=> addItemToCart(product);

    return (
        <div className="product-card-container">
            <img alt={name} src={imageUrl} />;
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <ButtonComponent onClick={addProductToCart} buttonType="inverted" >Add to Cart </ButtonComponent>
        </div>
    )
}

export default ProductCard;