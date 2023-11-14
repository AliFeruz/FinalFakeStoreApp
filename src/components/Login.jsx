import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { user, signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting to sign in with: ", email, password);
    signin(email, password);
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

  return (

    <>
        <div className="flex flex-col padding 
        shadow-lg shadow-indigo-500/50
      rounded-md dark:bg-gray-100 justify-center 
      items-center gap-5">
       <h2 className="text-4xl text-purple-800 font-palanquin font-bold text-center">
        Login
        </h2>
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
      <button
        type="submit"
        className="text-xl mt-6 font-montserrat text-center
        text-purple-800">
        click to LOGIN 
      </button>

        </form>
      

       <div>
        <h2>*if you dont have account, you can register 
        <Link to={"/register"} className="font-bold text-center"> Here</Link>
        </h2>
       
       </div>
      </div>
      </>



  );
};

export default Login;
