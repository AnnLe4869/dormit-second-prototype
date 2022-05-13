import React from "react";
import Cart from "./Cart/Cart";
import CategoryItem from "./CategoryItem/CategoryItem";
import styles from "./Home.module.css";
import Items from "./Item/Item";

export default function HomePage() {
  return (
    <>
      <main>
        <div className={styles.center}>
          <p>
            <div className={styles.item}>For you</div>
          </p>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
        </div>
        <div className={styles.center}>
          <p>
            <div className={styles.item}>Trending</div>
          </p>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
        </div>
        <div className={styles.center}>
          <p>
            <div className={styles.item}>Deal</div>
          </p>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
          <div className={styles.thing}>
            <Items />
          </div>
        </div>
        <div className={styles.cateCenter}>
          <p>
            <div className={styles.cate}>Chips</div>
          </p>
          <hr style={{ height: "8px" }} id={styles.color1}></hr>
          <br></br>
          <br></br>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
        </div>
        <div className={styles.cateCenter}>
          <p>
            <div className={styles.cate}>Snacks</div>
          </p>
          <hr
            style={{ height: "8px" }}
            classname={styles.line}
            id={styles.color2}
          ></hr>
          <br></br>
          <br></br>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
        </div>
        <div className={styles.cateCenter}>
          <p>
            <div className={styles.cate}>Energy</div>
          </p>
          <hr
            style={{ height: "8px" }}
            className={styles.line}
            id={styles.color3}
          ></hr>
          <br></br>
          <br></br>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
        </div>
        <div className={styles.cateCenter}>
          <p>
            <div className={styles.cate}>Drinks</div>
          </p>
          <hr
            style={{ height: "8px" }}
            className={styles.line}
            id={styles.color4}
          ></hr>
          <br></br>
          <br></br>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
          <div className={styles.cateThing}>
            <CategoryItem />
          </div>
        </div>
        <Cart />
      </main>
    </>
  );
}
