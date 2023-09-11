import "./Navbar.scss"
import { useState } from "react";

const Navbar = () => {

    let [warna,setWarna] = useState("#172554")

    const merahtua = () =>{
        const warnabaru = "darkred"; 
        setWarna(warnabaru)
    }

    const birutua = () =>{
        const warnabaru = "#172554"; 
        setWarna(warnabaru);
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: warna}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MyPortofolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">MyCertificate</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Lainnya
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a className="dropdown-item" onClick={merahtua}>Merah Tua</a></li>
                                <li className="nav-item"><a className="dropdown-item" onClick={birutua}>Biru Tua</a></li>
                                <li><a className="dropdown-item" href="#">-</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>   
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;