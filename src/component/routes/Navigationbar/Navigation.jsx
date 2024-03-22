import { Outlet, Link } from "react-router-dom";
import Logo from "../../../assets/images/teewhy2.jpg"
import "./navigation.styles.scss"
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        {/* this will link back to the home page */}
        <Link className="logo-container" to="/">
          <img src={Logo} alt="" srcset="" className="image" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP-NOW 
          </Link>

          <Link className="nav-link" to="/signin">
            SIGNIN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
