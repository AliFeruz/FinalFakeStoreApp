import { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import { DataContext } from "../context/DataContext";

const Home = () => {
 
  const [isModalOpen, setModalOpen] = useState(false);
  const [chosenProduct, setChosenProduct]= useState(null)
  const {products, addToCart}= useContext(DataContext)


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
     {isModalOpen && <Modal closeModal={closeModal} chosenProduct={chosenProduct} addToCart={addToCart}/>}
    <section className="mt-4 dark:bg-gray-100">
    <div className="flex flex-col shadow-lg 
    shadow-indigo-500/50 rounded-md dark:bg-gray-100 
    justify-center ">
      <h1 data-aos="fade-right" className="mt-1 text-center font-palanquin 
      text-8xl max-sm:text-[72px] 
      max-sm:leading-[82px] font-bold">
      The New Arrival <br />
      on <br/> Fake<span className="text-purple-800">Store</span>
      </h1>
       <h2 className="font-montserrat text-slate-gray 
       text-center text-lg font-bold items-center 
       leading-8 mt-6 mb-10 gap-5">
        Discover stylish FakeStore arrivals, quality comfort, and innovation
        for your active life.
      </h2>
        <div className="mt-5 gap-5">
        {products?.length > 0 ? (
        <div className="mt-16 grid 
          lg:grid-cols-4 md:grid-cols-3
          sm:grid-cols-2 grid-cols-1
          sm:gap-4 gap-14 "
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.id} callback={handleChoice}/>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-center text-4xl padding">No products found</h2>
        </div>
      )}
        </div>
        
        </div>
    </section>
    </>
    
  );
};

export default Home;
