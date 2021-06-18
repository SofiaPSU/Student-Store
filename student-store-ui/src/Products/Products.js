import "./Products.css"
import { Link } from "react-router-dom"

export default function Products( { product = {} }){

    return (
        <div className="prod-style">
        <Link className= "prod" to={`/store/${product.id}`}>
            <div className="all">
           <div className="product-preview">
               <img src={product.image} alt={product.name}></img>
           </div>
            
            <div className="product-body">
                <div className="product-name">
                    <h1>{product.name}</h1>
                </div>
                <div className="category">
                    <h2>Category: {product.category}</h2>
                </div>
                <div className="price">
                    <h2>Price: ${product.price}</h2>
                </div>
            </div>
            </div>
            </Link>
        </div>
        
    );
}