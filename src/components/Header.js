import logo from "../image/logo.jpg"
import { Link } from "react-router-dom";
import useLocalStorage from "../utilis/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../utilis/useAuth";
import useOnline from "../utilis/useOnline";


const Title = () => (
    <a href="/">
    <img className="logo" src={logo} alt="Logo" />
  </a>
);


const Header = () => {
   const navigate = useNavigate();

// call custom hook useLocalStorage for getting localStorage value of user
const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

// call custom hook useAuth for user is loggedin or not
const [isLoggedin, setIsLoggedin] = useAuth();

useEffect(() => {
  // if value of getLocalStorage is equal to null setIsLoggedin to false
  if (getLocalStorage === null) {
    setIsLoggedin(false);
  }
}, [getLocalStorage])

// call custom hook useOnline if user is online or not
const isOnline = useOnline();
    return (
       <div className="header">
           <Title />
           <div className="nav-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage()
                  setIsLoggedin(false);
                }}
              >
                Logout<span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login<span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
            )}
          </li>
              </ul>
           </div>
       </div>
    );
 };

export default Header;