import ProductCard from "../components/ProductCard";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import Modal from "../components/Modal";

const ManProducts = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [chosenProduct, setChosenProduct]= useState(null)

  const {manspPoducts, addToCart}= useContext(DataContext)

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
     <section className="max-container mt-12">
      <div className="flex flex-col padding shadow-lg shadow-indigo-500/50
      rounded-md dark:bg-gray-100 justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold text-center">
          Popular <br />
          <span className="text-purple-800"> Mens Clothing </span>
        </h2>
        <h2 className="text-xl mt-6 font-montserrat text-center
    text-purple-800"
        >Our Winter collections</h2>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 
      sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {manspPoducts.map((product, productId) => (
          <ProductCard product={product} key={productId} callback={handleChoice}/>
        ))}
      </div>
    </section>
    </>
   
  );
};

export default ManProducts;
