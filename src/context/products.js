import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../utilis/URL";
import { flattenProducts, featuredProducts, paginate } from "../utilis/helpers";

export const ProductContext = React.createContext();

// Provider , Consumer , useContext

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [featured, setFeatured] = useState([]);
  const [products, setProducts] = useState([]);
  // pagination
  const [page, setPage] = useState(0);
  const [sorted, setSorted] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    price: "all",
  });

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      const products = flattenProducts(response.data);
      setSorted(paginate(products));
      setProducts(products);
      const featured = featuredProducts(flattenProducts(response.data));
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);
  useEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    const { search, price } = filters;
    // logic
    if (search !== "") {
      newProducts = newProducts.filter((item) => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }
    if (price !== "all") {
      newProducts = newProducts.filter((item) => {
        if (price === 0) {
          return item.price < 5;
        } else if (price === 5) {
          return item.price > 5 && item.price < 7;
        } else if (price === 7) {
          return item.price > 7 && item.price < 10;
        } else {
          return price.item >= 10;
        }
      });
    }

    setPage(0);
    setSorted(paginate(newProducts));
  }, [filters, products]);

  const changePage = (index) => {
    setPage(index);
  };
  const updateFilters = (e) => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({
      ...filters,
      [filter]: filterValue,
    });
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        featured,
        page,
        changePage,
        sorted,
        filters,
        updateFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
