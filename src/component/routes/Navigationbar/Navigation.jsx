import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import Logo from "../../../assets/images/teewhy2.jpg";
import { NavigationContainer,NavLink,NavLinks,LogoContainer,MainContentWrapper } from "./Navigation.styles.jsx";
import { Cartdropdown } from "../../../cartdropdown/Cartdropdown";
import Carticon from "../../../cartIcon/Carticon";
import { UserContext } from "../../../context/Context";
 import { CartContext } from "../../../context/Cartcontext"; 
import { Signoutuser } from "../../../utility-files/firebase/Firebase";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { iscartopen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
        <h1>DIVINE'S  </h1>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP-NOW</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={Signoutuser}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <div className="cart-icon">
            <Carticon />
          </div>
        </NavLinks>
        {iscartopen && <Cartdropdown />}
      </NavigationContainer>
      <MainContentWrapper>
        <Outlet />
      </MainContentWrapper>
    </>
  );
};

export default Navigation;