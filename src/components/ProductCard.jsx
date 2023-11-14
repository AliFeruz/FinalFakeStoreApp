import { star } from "../assets/icons";
import PropTypes from "prop-types";


const ProductCard = ({ product, callback }) => {
 

  return (
    <div className="flex flex-col cursor-pointer dark:bg-gray-300 p-5 items-center 
    rounded-lg shadow-lg shadow-indigo-500/50">
      <img src={product.image} alt={product.title} className="w-[282px] 
      h-[282px] object-contain rounded-md" />
      <div className="text-center">
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {product.title}
        </h3>
        <div className="mt-8 flex justify-center gap-2.5">
          <img src={star} alt="rating icon" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            {product.rating.rate}
          </p>
        </div>
        <p className="mt-2 font-semibold font-montserrat text-purple-800 text-2xl 
        leading-normal">{product.price} $</p>
                <button onClick={()=>callback(product)} className="cursor-pointer 
        dark:bg-gray-100 p-5 items-center rounded-lg shadow-lg 
        border-purple-800 shadow-indigo-500/50 mt-6">
          Quick View
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.shape({
      rate: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductCard;
