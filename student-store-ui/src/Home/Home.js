
import "./Home.css"
import Products from "../Products/Products"


export default function Home({ products = [] }) {
  return (
    <div className="Home">
       <div className = "homepg">
       <h1>Products</h1>
        {products.map((product) => (
            <Products product={product} key={product.id}/>
        ))}
       </div>

    </div>
  )
}