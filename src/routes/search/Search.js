import React from "react";
import { useState, useEffect } from "react";

import styles from "./Search.module.css";
import CategoryMenu from "../../shared/category-menu/CategoryMenu";
import SearchIcon from "@mui/icons-material/Search";

/* ViewCart components */
import ViewCart from "../../shared/view-cart/ViewCart";

import BottomNav from "../../shared/bottom-nav/BottomNav";

import ProductListing from "../../shared/product/ProductListing";
import { mockProducts } from "../../mock_data/data/mockData.js";

function Search() {
  /*
   * useState() elements for the list of products and the search input field
   */
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [empty, setEmpty] = useState(true);
  const [searchCount, setSearchCount] = useState(0);

  /*
   * useEffect() will retrieve the products from the database and initiate
   * the state of the list. For now it is using mock data from `mockData.js`.
   */
  useEffect(() => {
    /* TODO: Retrieve products from database */
    setProducts(mockProducts);
  }, []);

  /*
   * useEffect() that will set the empty state each time the search state is updated.
   */
  useEffect(() => {
    if (search === "") {
      setSearchCount(0);
      setEmpty(true);
    } else {
      setSearchCount(filteredProducts.length);
      setEmpty(false);
    }
  }, [search]);

  /*
   * This will filter the rendered products based on the state of the query
   */
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  /*
   * onChange() event for the search input field
   */
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  function handleSubmit() {
    alert("Picking up!");
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.searchContainer}>
            <SearchIcon
              className={styles.searchIcon}
              style={{ color: "#686868" }}
            />
            <input
              className={styles.searchBar}
              type="search"
              placeholder="Search DormIt"
              onChange={handleChange}
            />
          </div>


          {empty ? (
            <></>
          ) : searchCount ? (
            <h3 className={styles.resultsText}>{searchCount} results</h3>
          ) : (
            <>
              <h3 className={styles.resultsText}>{searchCount} results</h3>
              <div className={styles.noResultsContainer}>
                <h3 className={styles.noResultsText}>No results found</h3>
                <p>
                  We couldn't find "{search}". Sorry bestie. Want us to pick it
                  up?
                </p>
                <input
                  className={styles.pickupTextField}
                  type="text"
                  value={search}
                  onSubmit={handleSubmit}
                />
              </div>
            </>
          )}

          <div className={styles.supplies}>
            <ul className={styles.bigItemList}>
              {/* if empty state is false, render filterProducts */}
              {empty ? (
                <></>
              ) : (
                filteredProducts.map((product) => {
                  return (
                    <li>
                      <ProductListing
                        id={product.id}
                        name={product.name}
                        image={product.images[0]}
                        description={product.description}
                        price={product.prices[0].unit_amount}
                        stock={product.metadata.quantity}
                      />
                    </li>
                  );
                })
              )}
            </ul>
          </div>


          <CategoryMenu/>

        </div>
      </div>
      <ViewCart numItems="X" totalAmount="X.XX" />
      <BottomNav />
    </>
  );
}

export default Search;
