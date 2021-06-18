import "./Navbar.css"
import { Link } from "react-router-dom"
export default function Navbar(){
    return ( <div className = "nav">
        <h1><Link className="link" to="/">&#127978;Student Store</Link></h1>
            
    </div>)
}