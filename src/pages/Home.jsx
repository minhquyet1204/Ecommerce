import React, { useState, useEffect } from "react";
import ProductItem from "../components/productItem/ProductItem";
import HeroSlide from "../components/heroSlide/HeroSlide";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const filterProduct = data.filter((product) => {
        return (
          product.category === "men's clothing" ||
          product.category === "women's clothing"
        );
      });
      setProducts(filterProduct);
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeroSlide />

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.length > 0 &&
              products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
