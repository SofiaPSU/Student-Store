
import "./Home.css"
//import Products from "../Products/Products"


export default function Home({ products = [] }) {
  return (
    <div className="Home">
       <div className = "homepg">
        {products.map((product) => (
          <div className="products-preview">
            {product.name}
            {product.category}
            <img src={product.image} alt = {product.name}/>
          
          </div>
        ))}
       </div>

    </div>
  )
}