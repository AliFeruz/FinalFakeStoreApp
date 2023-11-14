import ThemeBtn from "../components/ThemeBtn";
import { Link } from "react-router-dom";

const AllLinks = () => {
  return (
    <>
       <div className="padding-4 relative m-10">
        <div className="flex sm:flex-col lg:flex-row items-center 
        justify-between">
        <ThemeBtn/>
        <Link to={"/"} className="cursor-pointer text-center">Home</Link>
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
