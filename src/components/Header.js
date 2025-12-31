import { useState } from "react";

const Header = () => {
  const [btnLogin,setbtnLogin]=useState("login")
  return (
    <div className="header">

      <img
        src="https://reactjs.org/logo-og.png"
        width="80"
        alt="logo"
      />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn" 
          onClick={()=>{
            btnLogin === "login"? setbtnLogin("logout"):setbtnLogin("login"); 
           }}>
  {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;