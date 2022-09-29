import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/media"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Media
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/media">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/media">
                    Videos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/market">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbarItems">
//         <ul>
//           <a href="#home">
//             <li>Home</li>
//           </a>
//           <a href="#about">
//             <li>About</li>
//           </a>
//           <a href="#media">
//             <li>Media</li>
//           </a>
//           <a href="#services">
//             <li>Services</li>
//           </a>
//           <a href="#blog">
//             <li>Blog</li>
//           </a>
//           <a href="#shop">
//             <li>Shop</li>
//           </a>
//           <a href="#contact">
//             <li>Contact</li>
//           </a>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
