import React from "react";
import { star } from "../assets/icons";

function Modal({ chosenProduct, closeModal, addToCart }) {
  
  return (
<>
<div className="modal fixed inset-0 flex 
items-center padding gap-4 mb-3 justify-center">
  <div className="flex flex-col 
  justify-center items-center
    w-98 bg-gray-50 border border-purple-500 
    rounded-lg z-10">
  <img src={chosenProduct.image} alt={chosenProduct.title} className="w-[282px] 
   h-[282px] object-contain mt-3 rounded-md" />
  <h3 className="mt-5 text-center 
    text-2xl font-roboto-slab">{chosenProduct.title}</h3>
    <p className="text-2xl mt-2">{chosenProduct.price} $</p>
    <p className="font-raleway text-uppercase text-xs text-gray-500 text-center mt-4">
      {chosenProduct.description}</p>
      <div className="mt-8 flex justify-center gap-2.5">
        <p className="text-2xl"> Rate: {chosenProduct.rating.rate}</p>
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="text-2xl"> Count: {chosenProduct.rating.count}</p>
      </div>
      <div className="flex flex-row justify-between mb-4 mt-2">
     <button onClick={()=>addToCart(chosenProduct)} className="cursor-pointer 
     dark:bg-gray-100 p-5 items-center rounded-lg shadow-lg 
     border-purple-800 shadow-indigo-500/50 mt-6">Add to favorites</button>
     <br />
     <button onClick={closeModal} className="cursor-pointer 
     dark:bg-gray-100 p-5 items-center rounded-lg shadow-lg 
     border-purple-800 shadow-indigo-500/50 mt-6">Close</button>
      </div>
  </div>
</div>

</>
  );
}

export default Modal;
