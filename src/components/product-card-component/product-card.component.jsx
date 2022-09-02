import ButtonComponent from "../button-component/button.component";
import "./product-card.styles.scss"

const ProductCard = ({product})=>{
    console.log(product);

    const {name,price, imageUrl} = product;

    return (
        <div className="product-card-container">
            <img alt={name} src={imageUrl} />;
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <ButtonComponent buttonType="inverted" >Add to Cart </ButtonComponent>
        </div>
    )
}

export default ProductCard;