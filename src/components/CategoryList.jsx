// import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div data-v-33d79d7a className="portal_target">
      <nav className="tabs">
        <ul data-v-4b28b31a data-v-5fe0be77 className="ul_tab home_tabs inline">
          <li
            data-v-ca29585a
            data-v-5fe0be77
            className="li_tab"
            data-v-4b28b31a
          >
            <Link
              data-v-09ef6665
              data-v-5fe0be77
              to="/"
              className="tab active"
              data-v-ca29585a
            >
              <span data-v-09ef6665 className="tab_name">
                {" "}
                신상품{" "}
              </span>
            </Link>
          </li>
          <li
            data-v-ca29585a
            data-v-5fe0be77
            className="li_tab"
            data-v-4b28b31a
          >
            <Link
              data-v-09ef6665
              data-v-5fe0be77
              to="/"
              className="tab"
              data-v-ca29585a
            >
              <span data-v-09ef6665 className="tab_name">
                {" "}
                베스트{" "}
              </span>
            </Link>
          </li>
          <li
            data-v-ca29585a
            data-v-5fe0be77
            className="li_tab"
            data-v-4b28b31a
          >
            <Link
              data-v-09ef6665
              data-v-5fe0be77
              to="/"
              className="tab"
              data-v-ca29585a
            >
              <span data-v-09ef6665 className="tab_name">
                {" "}
                특가상품{" "}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    // <div className="relative min-w-[1050px] w-full z-10 tracking-tight bg-white">
    //   <nav className="relative flex justify-between w-[1050px] h-[56px] mx-auto">
    //     <ul className="flex ml-[-100px]">
    //       <li>
    //         <a href="">
    //           <span
    //             className={`categoryList ${
    //               activeCategory === "신상품" ? "active" : ""
    //             }`}
    //             onClick={() => handleClick("신상품")}
    //           >
    //             신상품
    //           </span>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="">
    //           <span
    //             className={`categoryList ${
    //               activeCategory === "베스트" ? "active" : ""
    //             }`}
    //             onClick={() => handleClick("베스트")}
    //           >
    //             베스트
    //           </span>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="">
    //           <span
    //             className={`categoryList ${
    //               activeCategory === "1인가구" ? "active" : ""
    //             }`}
    //             onClick={() => handleClick("1인가구")}
    //           >
    //             1인가구
    //           </span>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="">
    //           <span
    //             className={`categoryList ${
    //               activeCategory === "2인가구" ? "active" : ""
    //             }`}
    //             onClick={() => handleClick("2인가구")}
    //           >
    //             2인가구
    //           </span>
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default CategoryList;
