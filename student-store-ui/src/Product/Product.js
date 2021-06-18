import "./Product.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Product(){
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const[isLoading, setIsLoading] = useState(false)
    const[error, setError] = useState(null)

    useEffect(() =>{
        const fetchProduct = async () =>{
            setIsLoading(true)
            
            try {
                const res = await axios.get(`http://localhost:3001/store/products/${id}`)
                console.log({res})
                if (res?.data?.product){
                    setProduct(res.data.product)
                }
                else{
                    setError("Post not found")
                }
            } catch (err) {
                console.log(err)
            }
            setIsLoading(false)
        }
        fetchProduct()
    }, [id])
    const renderProductContent = () =>{
        if (isLoading){
            return <h1>Loading...</h1>
        }
        if (error){
           return ( 
               <>
           <h1>Error</h1>
            <p className="error">{String(error)}</p>
            </>
           )
        }
        return(
            <>
            <h1>{product.name}</h1>
            <div className="prod-des">
                <img src={product.image} alt={product.name}></img>
                <h2>Category: {product.category}</h2>
                <h2>Description: {product.description}</h2>
                <h2>Price: ${product.price}</h2>
            </div>
            </>
        )
    }
    return (
            <div className="product-content">
                {renderProductContent()}
            </div>
       
    )
}