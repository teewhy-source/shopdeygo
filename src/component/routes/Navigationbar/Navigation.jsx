import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../../assets/images/teewhy2.jpg";
import "./navigation.styles.scss";
import { Cartdropdown } from "../../../cartdropdown/Cartdropdown";
import Carticon from "../../../cartIcon/Carticon";
import { UserContext } from "../../../context/Context";
 import { CartContext } from "../../../context/Cartcontext"; 
import { Signoutuser } from "../../../utility-files/firebase/Firebase";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { iscartopen } = useContext(CartContext);
  // console.log(currentUser);

  // const signouthandler = async() =>{
  //  await Signoutuser()
  //   setCurrentUser(null)
  // }
  return (
    <>
      <div className="navigation">
        {/* this will link back to the home page */}
        <Link className="logo-container" to="/">
          <img src={Logo} alt="" srcset="" className="image" />
        </Link>

        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP-NOW
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={Signoutuser}>
              {" "}
              Sign out {""}
            </span>
          ) : (
            <Link className="nav-link" to="/auth ">
              SIGN IN
            </Link>
          )}

          <div className="cart-icon">
            <Carticon />
          </div>

        </div>
        {iscartopen && <Cartdropdown/>}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
