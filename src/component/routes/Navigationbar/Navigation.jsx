import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import Logo from "../../../assets/images/teewhy2.jpg";
import { NavigationContainer,NavLink,NavLinks,LogoContainer } from "./Navigation.styles.jsx";
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
      <NavigationContainer>
        {/* this will link back to the home page */}
        <LogoContainer className="logo-container" to="/">
          <GiClothes/>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP-NOW
          </NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={Signoutuser}>
              {" "}
              Sign out {""}
            </NavLink>
          ) : (
            <NavLink to='/auth' >
              SIGN IN
            </NavLink>
          )}

          <div className="cart-icon">
            <Carticon />
          </div>

        </NavLinks>
        {iscartopen && <Cartdropdown/>}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
