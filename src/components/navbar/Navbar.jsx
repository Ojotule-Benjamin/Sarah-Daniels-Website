import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "./navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
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
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#media"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Media
              </a>
              <ul className="dropdown-menu">
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
              <a className="nav-link" href="#service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#shop">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
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
