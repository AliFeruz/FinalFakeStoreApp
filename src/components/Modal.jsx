import React from "react";
import { star } from "../assets/icons";


function Modal({ chosenProduct, closeModal, addToCart }) {
  


  return (
<>
<div className="fixed inset-0 flex 
items-center justify-center z-10">
<div className="flex flex-col p-6 absolute
items-center w-96 bg-gray-200 border
border-purple-500 rounded-lg">
<img src={chosenProduct.image} alt={chosenProduct.title} 
className="w-[282px] h-[282px]
object-contain mt-3 rounded-md" />
<h3 className="mt-5 text-center text-2xl">
{chosenProduct.title}</h3>
<p className="text-2xl mt-2">{chosenProduct.price} $</p>
<p className="font-raleway text-uppercase text-xs
text-gray-600 text-center mt-4">{chosenProduct.description}</p>
<div className="mt-8 flex justify-center gap-2.5">
<p className="text-2xl"> Rate: {chosenProduct.rating.rate}</p>
<img src={star} alt="rating icon" width={24} height={24} />
<p className="text-2xl"> Count: {chosenProduct.rating.count}</p>
</div>
<div className="flex justify-between mt-4">
  <button onClick={() => addToCart(chosenProduct)} 
  className="cursor-pointer 
  text-purple-800 bg-white p-3 
  rounded-lg shadow-lg">Add to favorites</button>
  <button onClick={closeModal} 
  className="cursor-pointer ml-6
  text-red-500 bg-white p-3 
  rounded-lg shadow-lg">Close</button>
</div>
  </div>
</div>
</>
  );
}

export default Modal;
