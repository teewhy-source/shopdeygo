import { useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../../assets/images/teewhy2.jpg"
import "./navigation.styles.scss"
import { UserContext } from "../../../context/Context";
import { Signoutuser } from "../../../utility-files/firebase/Firebase";
const Navigation = () => {
  const {currentUser} = useContext(UserContext)
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

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP-NOW 
          </Link>

          {
            currentUser ? (
              <span className="nav-link" onClick={Signoutuser}> 
               {" "} Sign out {''}
                </span>
            ):(
            <Link className="nav-link" to="/auth ">
              SIGN IN
            </Link>
            )
          }

          
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
