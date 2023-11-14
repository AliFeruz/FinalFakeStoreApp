import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/LoginContext";
import AllLinks from "./AllLinks";


const Nav = () => {
  const {user, userChecked}= useContext(AuthContext)

  function getPath(){
  return user ? "/profile" : "/login"
  }

  function getLabel(){
    return user ? "Profile" : "Login"
    }
    const label = getLabel();

  const path = getPath()

  console.log('path :>> ', path);
  console.log('label :>> ', label);

  if (!userChecked) {
    return null;
  }

  return (
    <header className="padding-x py-8 z-10 
    before:w-full">
    <nav className="flex justify-between dark:bg-gray-50 
    items-center rounded-lg max-container">
    <img src="/public/logo.png" alt="Logo" width={100} height={29}
    className="shadow-lg rounded-lg shadow-indigo-500/50" />
    <h2 className='text-4xl font-palanquin font-bold'>
    Fake<span className='text-purple-800'>Store</span>
    </h2>
    <NavLink to={path}>{label}
    </NavLink>
    </nav>
    <AllLinks/>
    </header>
  );
};

export default Nav;

    
