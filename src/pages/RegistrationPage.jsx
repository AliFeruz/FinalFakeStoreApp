import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/LoginContext";

const SignUp = () => {
  const { user, signup } = useContext(AuthContext);
  const navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [repeatPassword, setRepeatPassword] = useState('');

const validatePassword = (password, repeatPassword) => {
  return password === repeatPassword;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const validPassword = validatePassword(password, repeatPassword);
  if (validPassword) {
    console.log("Attempting to sign up with: ", email, password);
    signup(email, password);
  } else {
    console.log("Passwords do not match");
  }
};

useEffect(() => {
  if (user) {
    navigate("/profile");
  }
}, [user, navigate]);

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

const handleRepeatPasswordChange = (e) => {
  setRepeatPassword(e.target.value);
};

  return (
     <>
        <div className="flex flex-col padding 
        justify-center items-center gap-5">
       <h2 className="text-4xl font-palanquin font-bold text-center">
        REGISTER
        </h2>
        <h3 className="text-xl mt-6 font-montserrat text-center
    text-purple-800">
      To register you need email and create strong password
        </h3>
        <form 
        className="flex flex-col padding shadow-lg shadow-indigo-500/50
        rounded-md mt-14"
        onSubmit={handleSubmit}>
        <input type="email" 
      value={email}
      onChange={handleEmailChange}
      placeholder="Enter email"
      className="border border-purple-700 text-center
      rounded-lg mt-5 padding-2
      "/>
       <input type="password" 
      value={password}
      onChange={handlePasswordChange}
      placeholder="Password"
      className="border border-purple-700 text-center
      rounded-lg mt-5 padding-2
      "/>
      <input type="password" 
      value={repeatPassword}
      onChange={handleRepeatPasswordChange}
      placeholder="repeat Password"
      className="border border-purple-700 text-center
      rounded-lg mt-5 padding-2
      "/>
      <button 
      type="submit"
      className="text-xl mt-6 
      font-montserrat text-center text-purple-800">
        click to REGISTER
      </button>
        </form>
      
       
      </div>
      </>



  );
};

export default SignUp;
