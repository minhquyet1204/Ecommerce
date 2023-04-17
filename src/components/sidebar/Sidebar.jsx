import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart/CartItem";
import { clearProduct, closeSidebar } from "../../store/productSlice";
import EmptyImg from "../../img/empty.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isOpenSidebar = useSelector((state) => state.product.isOpenSidebar);
  const cartItem = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearProduct());
  };

  const totalPrice = cartItem.reduce((accumulator, item) => {
    return accumulator + item.price * item.amount;
  }, 0);

  const totalAmount = cartItem.reduce((first, total) => {
    total = first + total.amount;

    return total;
  }, 0);
  return (
    <div
      className={`${
        isOpenSidebar ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({totalAmount})
        </div>
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={() => dispatch(closeSidebar(false))}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {cartItem.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <img src={EmptyImg} alt="" />
        </div>
      )}

      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cartItem.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {cartItem.length !== 0 && (
        <div className=" flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total: {totalPrice.toFixed(2)}$</span>
            </div>

            <div
              onClick={handleClearCart}
              className="cursor-pointer bg-red-600 py-4 text-white w-12 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash2 />
            </div>
          </div>

          <Link
            to="/"
            className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
          >
            View Cart
          </Link>
          <Link className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium">
            Check out
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
