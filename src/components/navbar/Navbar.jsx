import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-inverse">
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
          <div
            className="collapse navbar-collapse ms-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#media"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown "
                  aria-expanded="true"
                >
                  Media
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#gallery">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#videos">
                      Videos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#services"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#blog"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#shop"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#contact"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
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
