
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router"
import { Route } from "react-router"
import { useEffect } from "react"
import axios from "axios"
import Home from "./Home/Home"
import { useState } from "react"
import Products from "./Products/Products"
import Navbar from "./NavBar/Navbar"
import ProductDetail from "./ProductDetail/ProductDetail"


function App() {
  //useEffect function
  var [products, setProducts] = useState([])
  useEffect(()=>{
    const onStart = async() =>{
      try{
        const productsRequest = await axios.get("https://localhost:3000/products")
        if(productsRequest.data){
          setProducts(productsRequest.data)
        }
      }catch(err){
        console.log(err)
      }
    }
    onStart();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
