const Header = () => {
  return (
    // Header 전체
    <header>
      {/* Header 영역 */}
      <div className="relative w-[1050px] h-[100px] mx-auto">
        {/* 회원가입 영역 */}
        <div className="absolute top-2 right-0 z-20 flex items-center text-sm">
          <a href="" className="active">
            회원가입
          </a>
          <div className="w-[0.5px] h-[15px] mr-2 ml-2 bg-gray-400"></div>
          {/* <span className="ml-2 mr-2">|</span> */}
          <a href="">로그인</a>
          <div className="w-[0.5px] h-[15px] mr-2 ml-2 bg-gray-400"></div>
          {/* <span className="ml-2 mr-2">|</span> */}
          <a href="">고객센터</a>
        </div>

        {/* 검색 바 영역 */}
        <div className="h-[100px] pt-[36px] items-center">
          {/* 로고 홈 버튼 */}
          <div className="h-[63px] flex items-center">
            <img src="/images/logo.png" alt="오직로고" className="w-8 h-9" />
            <button className="font-normal text-mainBlue ml-5 w-25 h-15 text-lg">
              구독하기
            </button>
          </div>
          {/* 검색 바 */}
          <div className="relative w-[1050px] mx-auto">
            <div className="absolute flex items-center justify-between left-[325px] top-[-55px] w-[400px] h-[48px] pl-14 border-1 border-solid border-blue-600 rounded-md bg-white shadow-inner">
              <input
                id="gnb-search"
                placeholder="오직 나를 위해 구독해보세요"
                required
                className="w-[300px] bg-transparent border-none outline-none tracking-tighter text-lg"
              />
              <button
                id="submit"
                aria-label="submit"
                className="relative w-[30px] h-[30px] m-[10px] text-base flex items-center justify-center"
              >
                <img
                  src="./images/search.svg"
                  alt="search-img"
                  className="w-[full] h-[full]"
                />
              </button>
            </div>
          </div>
          {/* 장바구니 연결 */}
          <div className="relative w-[1050px] mx-auto">
            <div className="absolute flex top-[-49px] right-[-6px]">
              <button className="w-[36px] h-[36px]" aria-label="구매내역">
                <img src="./images/calendar.svg" alt="box-img" className="" />
              </button>
              <button className="w-[36px] h-[36px] " aria-label="구독하기">
                <img src="./images/subscribe.svg" alt="box-img" className="" />
              </button>
              <button className="w-[36px] h-[36px]" aria-label="회원정보">
                <img src="./images/person.svg" alt="box-img" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 카테코리 영역 */}
      <div className="relative min-w-[1050px] w-full z-10 tracking-tight bg-white shadow-md">
        <div className="relative flex justify-between w-[1050px] h-[56px] mx-auto">
          {/* 카테고리 Nav */}
          <div>
            <div className="flex items-center h-full">
              <span className="w-[16px] h-[14px] mr-[14px]">
                <img src="/images/category.svg" alt="category.img" />
              </span>
              <span></span>
            </div>
          </div>
          {/* 키워드별 추천 Nav */}
          <ul>
            <li>신상품</li>
            <li>베스트</li>
            <li>알뜰쇼핑</li>
            <li>특가/할인</li>
          </ul>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
