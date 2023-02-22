import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/productSlice";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.svg";
import { useEffect, useState } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [navScoll, setNavScoll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setNavScoll(true) : setNavScoll(false);
    });
  }, []);

  return (
    <header
      className={`${
        navScoll && "duration-300 shadow-lg bg-white"
      } fixed w-full z-10 transition duration-300 h-14`}
    >
      <div className="flex container mx-auto items-center justify-between h-full">
        <Link to="/">
          <div>
            <img className="w-10" src={Logo} alt="" />
          </div>
        </Link>

        <div
          className="cursor-pointer flex relative"
          onClick={() => dispatch(toggleSidebar())}
        >
          <BsBag className="text-2xl" />

          <div className="bg-red-500 absolute -right-2 -bottom-1 text-sm w-4 h-4 text-white rounded-full flex justify-center items-center ">
            {products.length}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
