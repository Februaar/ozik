import { Link } from "react-router-dom";

// 메인페이지에 렌더링되는
// 헤더 카테고리 목록
// 목록에서 스크롤 이동
const Category = ({ scrollToCategory }) => {
  return (
    <div data-v-33d79d7a className="portal_target category">
      <nav className="tabs">
        <ul data-v-4b28b31a data-v-5fe0be77 className="ul_tab home_tabs inline">
          <li
            data-v-ca29585a
            data-v-5fe0be77
            className="li_tab"
            data-v-4b28b31a
            onClick={() => scrollToCategory("recommendation")}
          >
            <Link
              data-v-09ef6665
              data-v-5fe0be77
              to="/"
              className="tab active"
              data-v-ca29585a
            >
              <span data-v-09ef6665 className="tab_name">
                추천
              </span>
            </Link>
          </li>
          <li
            data-v-ca29585a
            data-v-5fe0be77
            className="li_tab"
            data-v-4b28b31a
            onClick={() => scrollToCategory("new")}
          >
            <Link
              data-v-09ef6665
              data-v-5fe0be77
              to="/"
              className="tab"
              data-v-ca29585a
            >
              <span data-v-09ef6665 className="tab_name">
                신상품
              </span>
            </Link>
          </li>
          <li
            data-v-ca29585a
            data-v-5fe0be77
            className="li_tab"
            data-v-4b28b31a
            onClick={() => scrollToCategory("best")}
          >
            <Link
              data-v-09ef6665
              data-v-5fe0be77
              to="/"
              className="tab"
              data-v-ca29585a
            >
              <span data-v-09ef6665 className="tab_name">
                베스트
              </span>
            </Link>
          </li>
          <li
            data-v-ca29585a
            data-v-5fe0be77
            className="li_tab"
            data-v-4b28b31a
            onClick={() => scrollToCategory("special")}
          >
            <Link
              data-v-09ef6665
              data-v-5fe0be77
              to="/"
              className="tab"
              data-v-ca29585a
            >
              <span data-v-09ef6665 className="tab_name">
                특가상품
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Category;
