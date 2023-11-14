import ThemeBtn from "../components/ThemeBtn";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const AllLinks = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
       <div data-aos="fade-up" className="padding-5 relative m-10">
        <div className="flex sm:flex-col lg:flex-row items-center 
        justify-between">
        <ThemeBtn/>
        <Link to={"/"} className="cursor-pointer text-center">All Products</Link>
        <Link to={"/jewelery"} className="cursor-pointer 
        text-center">Jewelery</Link>
        <Link to={"/manproducts"} className="cursor-pointer
        text-center">Man Products</Link>
        <Link to={"/womanproducts"} className="cursor-pointer
        text-center">Women Products</Link>
        <Link to={"/electronicproducts"} className="cursor-pointer 
        text-center">Electronic Products</Link>
         </div>
        </div>
    </>
  )
}

export default AllLinks
