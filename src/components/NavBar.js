import { useState } from "react";

const NavBar = () => {
  const [btn, setBtn] = useState("Login")

    return (
      <div className="header flex gap-64 font-bold m-4 justify-center ">
        <div className="">
          <img className="logo" src="src/image/Designer.jpeg" alt="Monato" />
        </div>

        
  
        <div>
          <ul className="flex gap-x-10 ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
  
        <div className=" ">
          <img src="" alt="cart" />
        </div>

        <div className=" ">
          <button onClick={()=>{
            if(btn === "Login"){
              setBtn("Logout");
            }else{
              setBtn("Login");
            }
          }} className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
          {btn}
        </button>
        </div>
      </div>
    );
  };

  export default NavBar;