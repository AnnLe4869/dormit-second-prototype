import React from "react";
import { useState, useEffect, useContext } from "react";

import styles from "./Search.module.css";
import CategoryMenu from "../../shared/category-menu/CategoryMenu";
import searchIcon from "../../assets/Search/search-icon.svg";
import submitIcon from "../../assets/airplane.svg";
import submitIconGray from "../../assets/submit-icon.svg";
/* ViewCart components */
import ViewCart from "../../shared/view-cart/ViewCart";

import BottomNav from "../../shared/bottom-nav/BottomNav";
import ProductListing from "../../shared/product/ProductListing";

import { useProducts } from "../../context/product/product-handler";
import { UserContext } from "../../context/user/user-context";
import { renderProducts } from "../../helper/renderProducts";
import { style } from "@mui/system";

function Search() {
  /*
   * First fetch products and filter products without name images or prices
   */
  const products = useProducts()
    .slice(1)
    .filter((product) => {
      if (product.name && product.images && product.prices) {
        return true;
      } else return false;
    });

  const { state } = useContext(UserContext);

  /*
   * useState() elements for the search input field, the search count, and if the
   * field is empty
   */
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [empty, setEmpty] = useState(true);

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
  let filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  /*
   * onChange() event for the search input field
   */
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  function handleSubmit() {
    alert("Picking up!");
  }

  const sendSuggestions = () => {
    alert("Thank you for your suggestions.");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.searchContainer}>
            <img
              src={searchIcon}
              alt="search-icon"
              className={styles.searchIcon}
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
            <>
              <h3 className={styles.resultsText}>{searchCount} Results</h3>
            </>
          ) : (
            <>
              <h3 className={styles.resultsText}>{searchCount} Results</h3>
              <div className={styles.noResultsContainer}>
                <h3 className={styles.noResultsText}>No results found</h3>
                <p>
                  Sorry, we couldn’t find “{search}”.
                  <br />
                  Want us to pick it up?
                </p>
                <div className={styles.pickupTextFieldContainer}>
                  <input
                    className={styles.pickupTextField}
                    type="text"
                    value={search}
                    onSubmit={handleSubmit}
                  />
                  <img src={submitIcon} className={styles.submitIcon} />
                </div>
              </div>
              <div className={styles.trendingContainer}>
                <p className={styles.trendingHeader}>Suggested</p>
                <div className={styles.supplies}>
                  <ul className={styles.bigItemList}>
                    {renderProducts(products, "Trending", 12).map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* if empty state is false, render filterProducts */}
          {empty ? (
            <>
              <div className={styles.searchContainerSpacer}></div>
              <CategoryMenu />
            </>
          ) : (
            <>
              <div className={styles.supplies}>
                <ul className={styles.bigItemList}>
                  {filteredProducts.map((product) => {
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
                  })}
                </ul>
              </div>
            </>
          )}
          {searchCount > 0 ? (
            <div className={styles.suggestionContainer}>
              <p className={styles.suggestions}>Didn't find what you wanted?</p>
              <div className={styles.inputContainer}>
                <input
                  className={styles.suggestionInput}
                  type="text"
                  placeholder="Request"
                />
                <button
                  className={styles.suggestionSubmit}
                  type="submit"
                  onClick={sendSuggestions}
                >
                  <img src={submitIconGray} alt="submit-icon" />
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ViewCart numItems={state.cart?.length} totalAmount="X.XX" />
      <BottomNav />
    </>
  );
}

export default Search;
