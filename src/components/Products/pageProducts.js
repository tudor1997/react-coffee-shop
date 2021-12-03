import React from "react";
import ProductList from "./ProductsList";
import FiltersProducts from './FiltersProducts';
import { ProductContext } from "../../context/products";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
const PageProducts = () => {
  const { sorted, page, changePage } = React.useContext(ProductContext);

  if (sorted[page]) {
    return (
      <>
        <FiltersProducts></FiltersProducts>
        <ProductList title="Our Products" products={sorted[page]}></ProductList>
        {sorted.length > 1 && (
          <article className="pagination-buttons">
     {/* prev */}
            {page > 0 && (
              <button
                className="prev-page-btn"
                onClick={() => changePage(page - 1)}
              >
                <FaAngleDoubleLeft />
              </button>
            )}
            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}
        {/* next */}
            {page < sorted.length - 1 && (
              <button
                className="next-page-btn"
                onClick={() => changePage(page + 1)}
              >
                <FaAngleDoubleRight />
              </button>
            )}
          </article>
        )}
      </>
    );
  } else {
    return (
        <section className="search-error-section">
          <FiltersProducts></FiltersProducts>
      <h3 className="search-errors">
        Unfortunately, your search query didn't return any products.
      </h3>
      </section>
    );
  }
};

export default PageProducts;
