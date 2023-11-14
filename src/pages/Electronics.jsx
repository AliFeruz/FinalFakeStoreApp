import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const ElectronicProducts = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [chosenProduct, setChosenProduct]= useState(null)

  const {electronicProducts, addToCart}= useContext(DataContext)

  function openModal(){
    setModalOpen(true)
  }

  function closeModal(){
    setModalOpen(false)
  }

  function handleChoice(product) {
openModal()
setChosenProduct(product)
  }

  console.log("modal is:", isModalOpen)
  console.log("chosen product is", chosenProduct)


  return (
    <>
    {isModalOpen && <Modal closeModal={closeModal} 
    chosenProduct={chosenProduct} addToCart={addToCart}/>}
      <section className="max-container mt-8">
      <div className="flex flex-col padding shadow-lg shadow-indigo-500/50
      rounded-md dark:bg-gray-100 justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold text-center">
      <span className="text-purple-800"> Popular Electronics</span></h2>
      <p className="mt-2  text-2xl font-montserrat 
      font-bold text-center items-center">
      Discover a world of comfort, design, and value</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 
      md:grid-cols-3 sm:grid-cols-2 
      grid-cols-1 sm:gap-6 gap-12">
      {electronicProducts.map((product, productId) => (
      <ProductCard product={product} key={productId} callback={handleChoice} />
          ))}
      </div>
      </section>
    </>
  );
};

export default ElectronicProducts;
