import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [warna, setWarna] = useState("#172554");

  const merahtua = () => {
    const warnabaru = "darkred";
    setWarna(warnabaru);
  };

  const birutua = () => {
    const warnabaru = "#172554";
    setWarna(warnabaru);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: warna }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MyPortofolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  News
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <button className="dropdown-item" onClick={merahtua}>
                      Merah Tua
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="dropdown-item" onClick={birutua}>
                      Biru Tua
                    </button>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      -
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
