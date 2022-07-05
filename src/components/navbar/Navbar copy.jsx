import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-inverse">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ms-auto"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#about">
                  About
                </a>
              </li>

              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#media"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown "
                  aria-expanded="false"
                >
                  Media
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#gallery">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#videos">
                      Videos
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#services"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#blog"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#shop"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
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
