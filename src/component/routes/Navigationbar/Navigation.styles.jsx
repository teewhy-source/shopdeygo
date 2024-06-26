import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/teewhy.jpg"; // Adjust the path as necessary

// Define keyframes for slide-down animation
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  background-size: cover;
  background-position: center;
  position: fixed;
  border-radius: 1rem;
  height: 5rem;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000; /* Ensures the navigation is above other content */
  animation: ${slideDown} 0.5s ease-out; /* Apply animation */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0.5rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  color: rgb(165, 12, 236);

  @media (max-width: 768px) {
    width: auto;
    padding: 10px 0;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #5e3db3;

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

// Wrapper to offset the main content
export const MainContentWrapper = styled.div`
  padding-top: 70px; /* Adjust based on the height of your navigation bar */

  @media (max-width: 768px) {
    padding-top: 100px; /* Adjust based on the height of your mobile navigation bar */
  }
`;
