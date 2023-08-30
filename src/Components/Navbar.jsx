import { useState } from "react";
import "./Navbar.css"

const Navbar = (props) => {

    let [warna,setWarna] = useState("darkblue")

    const merahtua = () =>{
        const warnabaru = "darkred"; 
        setWarna(warnabaru)
    }

    const birutua = () =>{
        const warnabaru = "darkblue"; 
        setWarna(warnabaru);
    }

    return(
        <div className="navbar" style={{backgroundColor: warna}}>
            <button type="button" className="color-btn" onClick={merahtua}>Merah Tua</button>
            <h1 className="brand">{props.brand}</h1>
            <button type="button" className="color-btn" onClick={birutua}>Biru Tua</button>
        </div>
    )
}

export default Navbar;