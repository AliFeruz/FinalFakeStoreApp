import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/LoginContext";
import Cart from "../components/Cart";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


const Profile = () => {
  const [favorites, setFavorites] = useState([]);
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(DataContext);
  const navigate = useNavigate();
  

  useEffect(() => {
    const getFavorites = async () => {
      if (!user) {
        // Redirect to the login page when the user is not logged in
        navigate("/login");
        return;
      }

      try {
        const querySnapshot = await getDocs(collection(db, "users", user.email, "favourites"));
        const favoritesData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          favoritesData.push(data);
        });
        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    // Check if the user exists before calling getFavorites
    if (user !== null && user !== undefined) {
      getFavorites();
    }
  }, [user, navigate]);

  const handleLogout = () => {
    // Call the logout function
    logout();
    // Redirect to the login page
    navigate("/login");
  };


  return (

    <div className="flex flex-col padding justify-center items-center gap-5">
      <h2 className="text-4xl text-purple-800 font-palanquin font-bold text-center">
        Hello, {user.email}!
      </h2>
      <div>{cart.length > 0 && <Cart />}</div>
      <div className="padding-3 items-center">
      <h2 className="text-xl mt-6 font-montserrat 
      text-center text-purple-400">
      Your lists of favorite items</h2>
      {favorites.length > 0 && (
          <ul className="mt-4">
          {favorites.map((favorite, index) => (
          <li key={index}>
          <div className="mt-6">
          {favorite.list && (
          <ul className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 
          sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {favorite.list.map((item, itemIndex) => (
          <li key={itemIndex} className="flex flex-col cursor-pointer 
          dark:bg-gray-300 p-5 items-center rounded-lg shadow-lg shadow-indigo-500/50">
          <p className="mt-2 text-2xl leading-normal text-center font-semibold font-palanquin">{item.title}</p>
          {item.image && (
          <img src={item.image}  className="w-40 h-40 mt-3" alt={`Image for ${item.title}`} />
          )}
          <p className="mt-4 font-semibold font-montserrat 
          text-purple-800 text-2xl leading-normal">Price: {item.price}</p>
          </li>
          ))}
          </ul>
          )}
          </div>
          </li>
          ))}
          </ul>
          
        )}
      </div>
      <div className="w-full flex justify-between mt-5">
        <NavLink
        to="/"
        className="text-xl mt-12 font-montserrat 
        text-center items-center rounded-md w-90 h-9 
        text-purple-800">
        Continue shopping
        </NavLink><p className="text-center mt-4">
          *or click to <br />
        <button
        onClick={handleLogout}
        className="text-xl m-2 font-montserrat 
        text-center w-90 h-9 border-b-4 
        border-purple-500">
        LOGOUT</button>
        </p>
      </div>
    </div>
  );
};

export default Profile;
