const Header = () => {
  return (
    <header>
      <div className="relative w-[1050px] h-[100px] mx-auto">
        <div className="absolute top-0 right-0 z-20 flex items-center text-sm">
          <a href="" className="active">
            회원가입
          </a>
          <div className="w-0.5 h-4 mr-2 ml-2 bg-gray-300"></div>
          {/* <span className="ml-2 mr-2">|</span> */}
          <a href="">로그인</a>
          <span className="ml-2 mr-2">|</span>
          <a href="">고객센터</a>
        </div>
        <div className="h-[100px] pt-[36px] items-center">
          <div className="h-[63px] flex items-center">
            <img src="logo.png" alt="오직로고" className="w-8 h-9" />
            <button className="font-normal text-mainBlue ml-5 w-25 h-15 text-lg">
              구독하기
            </button>
          </div>
          <div>
            <div className="relative">
              <div className="absolute w-[400px] h-[48px] pl-[14px] top-[-55px] left-[325px] rounded-md flex items-center">
                <input
                  id="gnb-search"
                  placeholder="오직 나를 위해 구독해보세요."
                  required
                  className="items-center w-full h-10 px-12 border-1 rounded-md bg-white shadow-inner text-sm"
                />
                <button id="submit" aria-label="submit">
                  <img src="./src/assets/search.svg" alt="search-img" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative"></div>
        </div>
      </div>
      <div className="min-w-[1050px] tracking-tight bg-white relative shadow-md w-full z-10">
        <div className="relative flex justify-between w-[1050px] h-[56px] mx-auto"></div>
      </div>
    </header>
  );
};

export default Header;
