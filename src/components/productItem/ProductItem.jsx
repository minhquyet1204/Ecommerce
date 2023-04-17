import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/productSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    const updateCartItem = { ...product, amount: 1 };
    dispatch(addProduct(updateCartItem));

    notify();
  };

  const notify = () => {
    toast.success("Add to basket succeeded! Check out your cart");
  };
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={product.image}
              alt=""
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>

        <div className="absolute top-6 group-hover:right-0 -right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => handleAddToCart(product)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-400  rounded ">
              <BsPlus className="text-3xl" />
            </div>
          </button>

          <Link
            to={`/product/${product.id}`}
            className="w-12 h-12 flex justify-center items-center drop-shadow-xl bg-blue-400 rounded "
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div className="text-sm capitalize text-gray-500 ">
        {product.category}
      </div>
      <Link to={`/product/${product.id}`}>
        <div className="font-semibold my-1">{product.title}</div>
      </Link>
      <div className="font-semibold">$ {product.price}</div>

      <ToastContainer
        autoClose={1500}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </div>
  );
};

export default ProductItem;
