import React from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseAmount,
  increaseAmount,
  removeProduct,
} from "../../store/productSlice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveCartItem = (id) => {
    dispatch(removeProduct(id));
  };

  const handleIncreaseAmount = (item) => {
    dispatch(increaseAmount(item));
  };
  const handleDecreaseAmount = (item) => {
    dispatch(decreaseAmount(item));
  };
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${item.id}`}>
          <img className="max-w-[80px] " src={item.image} alt="" />
        </Link>

        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <Link
              to={`/product/${item.id}`}
              className="text-sm uppercase font-medium max-w-[240px] hover:underline"
            >
              {item.title}
            </Link>

            <div
              className="text-2xl cursor-pointer"
              onClick={() => handleRemoveCartItem(item.id)}
            >
              <IoMdClose className="text-gray-500 hover:text-red-600 transition" />
            </div>
          </div>

          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px]  items-center h-full border font-medium">
              <div
                onClick={() => handleDecreaseAmount(item)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {item.amount}
              </div>
              <div
                onClick={() => handleIncreaseAmount(item)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-around">
              ${item.price}
            </div>
            <div className="flex-1 flex justify-end items-center font-medium">
              ${(item.price * item.amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
