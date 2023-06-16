const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="top-bar">
          <a href="" className="new-account active">
            회원가입
          </a>
          <span>|</span>
          <a href="">로그인</a>
          <span>|</span>
          <a href="">고객센터</a>
        </div>
        <div className="search-section">
          <div className="description">
            <img src="logo.png" alt="오직로고" className="logo" />
            <button className="subscribe active">구독하기</button>
          </div>
          <div className="search">
            <div className="relative w-400 h-48">
              <input
                id="gnb-search"
                placeholder="오직 나를 위해 구독해보세요"
                required
                className="flex items-center justify-between w-full h-full px-14 border-1 border-solid border-blue-500 rounded-md bg-white shadow-inner"
              />
              <button id="submit" aria-label="submit" className="">
                <img src="./src/assets/search.svg" alt="search-img" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
