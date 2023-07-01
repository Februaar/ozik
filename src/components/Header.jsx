import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import SearchPage from "../components/SearchPage";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header>
      <div data-v-1d0b532e data-v-33d79d7a className="header">
        {/* header_top */}
        <div data-v-33d79d7a className="header_top">
          <div data-v-33d79d7a className="top_inner flex">
            {user ? (
              <ul data-v-33d79d7a className="top_list flex">
                <li data-v-33d79d7a className="top_item">
                  <Link
                    data-v-33d79d7a
                    to="/customer-service"
                    className="top_link"
                  >
                    고객센터
                  </Link>
                </li>
                <li data-v-33d79d7a className="top_item">
                  <Link data-v-33d79d7a to="/my-page" className="top_link">
                    마이페이지
                  </Link>
                </li>
                <li data-v-33d79d7a className="top_item">
                  <Link data-v-33d79d7a to="/subscription" className="top_link">
                    구독상품
                  </Link>
                </li>
                <li data-v-33d79d7a className="top_item">
                  <button
                    data-v-33d79d7a
                    onClick={handleLogout}
                    className="top_link"
                  >
                    로그아웃
                  </button>
                </li>
              </ul>
            ) : (
              <ul data-v-33d79d7a className="top_list flex">
                <li data-v-33d79d7a className="top_item">
                  <Link
                    data-v-33d79d7a
                    to="/customer-service"
                    className="top_link"
                  >
                    고객센터
                  </Link>
                </li>
                <li data-v-33d79d7a className="top_item">
                  <Link to="/my-page" className="top_link">
                    마이페이지
                  </Link>
                </li>
                <li data-v-33d79d7a className="top_item">
                  <Link data-v-33d79d7a to="/subscription" className="top_link">
                    구독상품
                  </Link>
                </li>
                <li data-v-33d79d7a className="top_item">
                  <Link data-v-33d79d7a to="/login" className="top_link">
                    로그인
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* header_main */}
        <div className="data-v-33d79d7a header_main">
          <div className="data-v-33d79d7a main_inner flex">
            <h1>
              <Link to="/" aria-label="로고" className="data-v-33d79d7a logo">
                OZIK
              </Link>
            </h1>
            <div className="right">
              <div data-v-6e10f65a className="gnb_area flex">
                <nav data-v-6e10f65a className="gnb">
                  <ul data-v-6e10f65a className="gnb_list flex">
                    <li data-v-6e10f65a data-v-24a540ed className="gnb_item">
                      <Link data-v-24a540ed to="/" className="gnb_link active">
                        HOME
                      </Link>
                    </li>
                    <li data-v-6e10f65a data-v-24a540ed className="gnb_item">
                      <Link data-v-24a540ed to="/" className="gnb_link">
                        TYPE
                      </Link>
                    </li>
                    <li data-v-6e10f65a data-v-24a540ed className="gnb_item">
                      <Link data-v-24a540ed to="/" className="gnb_link">
                        SHOP
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div>
                  <button
                    onClick={handleSearchClick}
                    aria-label="검색"
                    className="focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="black"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                  {searchOpen && <SearchPage />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
