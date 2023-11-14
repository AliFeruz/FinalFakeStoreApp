import { copyrightSign } from "../assets/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Footer = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <footer data-aos="fade-up-left" className="bg-gray-500 padding-x mt-10 padding-t pb-8">
      <div className="flex justify-between max-lg:flex-col">
        <div className="mt-10 flex flex-col items-center">
          <img
            src="/public/logo.png"
            alt="logo"
            width={150}
            height={46}
            className="m-0"/>
          <p className="mt-6 
          leading-7 font-montserrat 
          text-center
          text-white sm:max-w-sm">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center">
        <h4 className="font-montserrat text-3xl 
        leading-normal font-medium 
        mb-6 text-white text-center">
          Our Products
        </h4>
        <ul className="mt-3 text-2xl font-montserrat 
         leading-normal text-white-400 
        hover:text-slate-gray text-center">
        <li><Link to={"/jewelery"}>Jewelery</Link></li>
        <li><Link to={"/manproducts"}>Man Products</Link></li>
        <li><Link to={"/womanproducts"}>Women Products</Link></li>
        <li><Link to={"/electronicproducts"}>Electronic Products</Link></li>
        </ul>
        </div>
      </div>
      <div className="flex justify-between 
    text-white-400 mt-24 max-sm:flex-col 
      max-sm:items-center">
      <div className="flex flex-1 justify-start 
      items-center gap-2 font-montserrat cursor-pointer">
      <img
        src={copyrightSign}
        alt="copyright sign"
        width={20}
        height={20}
        className="rounded-full m-0"
        />
        <p>Copyright. All rights reserved.</p>
      </div>
      <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
