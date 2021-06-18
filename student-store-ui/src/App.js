
import './App.css';
/*import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router"
import { Route } from "react-router"*/
import { useEffect } from "react"
import axios from "axios"
import Home from "./Home/Home"
import { useState } from "react"
//import Products from "./Products/Products"
import Navbar from "./NavBar/Navbar"
//import ProductDetail from "./ProductDetail/ProductDetail"


function App() {
  //useEffect function
  var [products, setProducts] = useState([])
  useEffect(() => {
    const onStart = async() => {
      try{
        const res = await axios.get("http://localhost:3001/store/products")
        console.log("product list",res.data.products)
        const products = res?.data?.products
        if(products){
          setProducts(products)
        }
      }catch(err){
        console.log({ err })
      }
    }
    onStart()
  }, [])

  return (
    <div className="App">
     <Navbar />
    <Home products={products} />
    </div>
  );
}

export default App;
