import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import FilterBar from "../FilterBar/FilterBar";
import ToastNotification, { showToast } from "../CardToast/CartToast";
import axios from "axios";
import ScrollToTopButton from "../ScrollTopBtn/ScrollTopBtn";
import Loader from "../Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import Header from "../Header/Header";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState(500);
  const [sortOrder, setSortOrder] = useState("low-to-high");

  const loadingCaller = () => {
    setLoader(true);
    setInterval(() => {
      setLoader(false);
    }, 4000);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    loadingCaller();
    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }
    updatedProducts = updatedProducts.filter(
      (product) => product.price <= priceRange
    );

    if (sortOrder === "low-to-high") {
      updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
    } else {
      updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [category, priceRange, sortOrder, products]);

  const handleAddToCart = (product) => {
    showToast(`${product.title} added to cart!`);
    console.log(product.title);
  };

  return (
    <>
      <Header />
      {loader && loader ? (
        <Loader />
      ) : (
        <div className="section-product">
          <div className="filter_bar">
            <FilterBar
              setCategory={setCategory}
              setPriceRange={setPriceRange}
              setSortOrder={setSortOrder}
              priceRange={priceRange}
            />
          </div>
          <div className="product-list">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
      <ToastNotification />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
