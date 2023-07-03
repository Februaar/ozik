import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recommendations from "/public/data/recommendation.json";
const Search = (props) => {
  // const { category, data } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearchChange = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(event.target.value);

    if (input.trim() !== "") {
      const filteredResults = recommendations.filter((product) =>
        product.name.toLowerCase().startsWith(input)
      );
      setAutocompleteResults(filteredResults.map((product) => product.name));
    } else {
      setAutocompleteResults([]);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    performSearch(searchTerm);
    setSearchTerm("");
  };

  const performSearch = (searchTerm) => {
    setLoading(true);

    const filteredResults = recommendations.filter((product) =>
      product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    setAutocompleteResults(filteredResults.map((product) => product.name));

    setLoading(false);

    if (searchTerm.trim() !== "") {
      const updatedRecentSearches = [searchTerm, ...recentSearches.slice(0, 4)];
      setRecentSearches(updatedRecentSearches);
    }
  };

  useEffect(() => {
    performSearch(searchTerm);
  }, []);
  q;

  const handleRecentSearchDelete = (index) => {
    const updatedRecentSearches = [...recentSearches];
    updatedRecentSearches.splice(index, 1);
    setRecentSearches(updatedRecentSearches);
  };

  return (
    <>
      <a href="/" className="btn_layer_close" data-v-c13ac206 data-v-78455e2e>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </a>
      <div className="layer_content" data-v-78455e2e>
        <div className="search_container" data-v-c13ac206 data-v-78455e2e>
          <div className="search_wrap" data-v-c13ac206 data-v-78455e2e>
            <div
              data-v-63326639
              className="search_area"
              data-v-c13ac206
              data-v-78455e2e
            >
              <div data-v-63326639 className="search">
                <form onSubmit={handleSearchSubmit}>
                  {/* <form onSubmit={performSearch}> */}
                  <input
                    data-v-63326639
                    type="text"
                    placeholder="오직 나를 위해 구독해보세요"
                    title="검색창"
                    className="input_search show_placeholder_on_focus"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <button
                      type="submit"
                      data-v-63326639
                      className="absolute btn_search_delete"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-x-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                      </svg>
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* 최근 검색어, 추천 검색어 */}
        <div
          className={`search_content_wrap ${searchTerm ? "hidden" : ""}`}
          data-v-c13ac206
          data-v-78455e2e
        >
          <div className="recent_area" data-v-c13ac206 data-v-78455e2e>
            <div
              data-v-50e9c89a
              data-v-c13ac206
              className="layer_search_item recent_keywords"
              data-v-78455e2e
            >
              <div data-v-50e9c89a className="layer_search_title_wrap">
                <span data-v-50e9c89a className="title">
                  최근 검색어
                </span>
                <div data-v-50e9c89a className="title_sub_text"></div>
              </div>
              <div data-v-50e9c89a className="layer_search_item_content_wrap">
                <div
                  data-v-7d56e5a2
                  data-v-c13ac206
                  className="recent_box"
                  data-v-50e9c89a
                >
                  <div data-v-7d56e5a2 className="search_list">
                    {recentSearches.map((search, index) => (
                      <Link
                        to={`/search/${search}`}
                        key={index}
                        className="search_item"
                        data-v-7d56e5a2
                      >
                        <span data-v-7d56e5a2 className="search_item_text">
                          {search}
                        </span>
                        <svg
                          data-v-7d56e5a2
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="bi bi-x-lg ico_delete"
                          viewBox="0 0 16 16"
                          onClick={() => handleRecentSearchDelete(index)}
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search_card_items" data-v-c13ac206 data-v-78455e2e>
            <div
              data-v-50e9c89a
              data-v-c13ac206
              className="layer_search_item tag"
              data-v-78455e2e
            >
              <div data-v-50e9c89a className="layer_search_title_wrap">
                <span data-v-50e9c89a className="title">
                  추천 검색어
                </span>
                <div data-v-50e9c89a className="title_sub_text"></div>
              </div>
              <div data-v-50e9c89a className="layer_search_item_content_wrap">
                <div
                  data-v-23b03d29
                  className="search_card_tag_wrap search_card"
                >
                  <a
                    data-v-23b03d29
                    href="/recommendation/1"
                    className="search_card_tag"
                  >
                    스타벅스 커피
                  </a>
                  <a
                    data-v-23b03d29
                    href="/recommendation/2"
                    className="search_card_tag"
                  >
                    일리 커피
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 자동완성 기능 */}
        <div
          className={`suggest_wrap ${searchTerm ? "" : "hidden"}`}
          data-v-c13ac206
          data-v-78455e2e
        >
          <div className="suggest_area" data-v-c13ac206 data-v-78455e2e>
            {autocompleteResults.length > 0 ? (
              <div className="suggest_list lg" data-v-c13ac206 data-v-78455e2e>
                <div className="suggest_title_area" data-v-3c42ca29>
                  {autocompleteResults.map((name) => (
                    <div
                      key={name}
                      className="title"
                      data-v-3c42ca29
                      onClick={() => {
                        performSearch(name);
                        setSearchTerm("");
                      }}
                    >
                      <p className="suggest_title" data-v-3c42ca29>
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="error" data-v-3c42ca29>
                찾을 수 없는 상품입니다.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
