import ProductCard from "../components/ProductCard";
import { useContext, useState } from "react";
import Modal from "../components/Modal";
import { DataContext } from "../context/DataContext";

const WomanProducts = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [chosenProduct, setChosenProduct]= useState(null)

  const {womanProducts, addToCart}= useContext(DataContext)

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
    <section id="products" className="max-container mt-8">
      <div className="flex flex-col padding shadow-lg shadow-indigo-500/50
      rounded-md dark:bg-gray-100 justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold text-center">
        <span className="text-purple-800"> Womens Clothing </span>
        </h2>
      </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {womanProducts.map((product, productId) => (
          <ProductCard product={product} key={productId} callback={handleChoice}/>
        ))}
      </div> 
    </section>
    </>
    
  );
};

export default WomanProducts;
