import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const data = await res.json();

      setProducts(data);
    };
    fetchData();
  }, [params.id]);

  const notify = () => {
    toast.success("Add to basket succeeded! Check out your cart");
  };

  const handleAdd = () => {
    notify();
    dispatch(addProduct({ ...products, amount: 1 }));
  };

  return (
    <section className="pt-32 pb-12  lg:py-32 min-h-screen">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={products.image}
              alt=""
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {products.title}
            </h1>

            <div className="text-xl text-red-500 font-medium mb-6">
              $ {products.price}
            </div>

            <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start">
              <p className="mb-4 mt-4">{products.description}</p>

              <button
                className="bg-primary py-3 text-white w-36"
                onClick={handleAdd}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        autoClose={1500}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </section>
  );
};

export default ProductDetail;
