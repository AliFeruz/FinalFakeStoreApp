import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { AuthContext } from "../context/LoginContext";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../firebaseConfig";

const Cart = () => {
  const { cart, setCart } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newListObject = {
      author: user.email,
      list: cart,
      data: Date.now(),
    };

    try {
      const docRef = await addDoc(collection(db, "users", user.email, "favourites"), newListObject);
      console.log("Document written with ID: ", docRef.id);
      setCart([]);
      // Assuming setOrder is defined and serves a specific purpose
      // setOrder(cart);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex flex-col mt-5">
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col gap-32 p-128 
    shadow-lg shadow-indigo-500/50 rounded-md 
    dark:bg-gray-100 mt-5">
    {cart.length === 0 ? (
    <p className="text-purple-800">Your cart is empty.</p>
    ) : (
    <div className="justify-center items-center">
      <p className="text-3xl mt-4 mb-5 font-montserrat text-center
    text-purple-800">Create list of favorite items</p>
    {cart.map((item, index) => (
    <div
    key={index}
    className="flex flex-col justify-between 
    border border-purple-800 padding items-center">
    {item.image && (
    <img
    src={item.image}
    alt="Image"
    width={44} height={44}
    /> )}
    <p className="text-center mt-2">{item.title}</p>
    <p className="text-center mt-3">{item.price}</p>
    </div>
    ))}
    <button
    type="submit"
    className="text-xl mt-2 font-montserrat
    text-center border rounded-md border-purple-800 
    w-full h-9 shadow-lg shadow-indigo-500/50"
    >
    Save to Favorites
    </button>
    </div>
    )}
     </div>
      </form>
    </div>
  );
};

export default Cart;
