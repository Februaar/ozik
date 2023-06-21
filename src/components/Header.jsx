import { Link } from "react-router-dom";

const Header = () => {
  return (
    // Header 전체
    <header>
      {/* Header 영역 */}
      <div className="relative w-[1050px] h-[100px] mx-auto">
        {/* 회원가입 영역 */}
        <div className="absolute top-2 right-0 z-20 flex items-center text-sm">
          <Link to="/signup">회원가입</Link>
          <div className="w-[0.5px] h-[15px] mr-2 ml-2 bg-gray-400"></div>
          <Link to="/login">로그인</Link>
          <div className="w-[0.5px] h-[15px] mr-2 ml-2 bg-gray-400"></div>
          <Link to="/customer-service">고객센터</Link>
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
            <div className="flex items-center justify-between absolute left-[325px] top-[-55px] w-[400px] h-[45px] pl-14 border border-blue-600 rounded-md bg-white shadow-md">
              <input
                id="gnb-search"
                placeholder="오직 나를 위해 구독해보세요"
                required
                className="w-300 bg-transparent border-none outline-none text-base tracking-tighter"
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
            <div className="absolute flex items-center justify-center top-[-49px] right-[0px]">
              <button
                className="w-[36px] h-[36px] mr-[15px]"
                aria-label="구매내역"
              >
                <img
                  src="./images/calendar.svg"
                  alt="box-img"
                  className="w-[22px] h-[22px] mx-auto"
                />
              </button>
              <button
                className="w-[36px] h-[36px] mx-[5px]"
                aria-label="구독하기"
              >
                <img
                  src="./images/subscribe.svg"
                  alt="box-img"
                  className="w-[22px] h-[22px] mx-auto"
                />
              </button>
              <button
                className="w-[36px] h-[36px] ml-[15px]"
                aria-label="회원정보"
              >
                <img
                  src="./images/person.svg"
                  alt="box-img"
                  className="w-[22px] h-[22px] mx-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 카테코리 영역 */}
      <div className="relative min-w-[1050px] w-full z-10 tracking-tight bg-white">
        <div className="relative flex justify-between w-[1050px] h-[56px] mx-auto">
          {/* 카테고리 Nav */}
          <div>
            <div className="flex items-center h-full">
              <span className="w-[22px] h-[22px] mr-[14px]">
                <img
                  src="/images/category.svg"
                  alt="category.img"
                  className="w-full mx-auto"
                />
              </span>
              <span className="font-medium tracking-tighter text-gray-700 text-lg">
                카테고리
              </span>
            </div>
          </div>
          {/* 키워드별 추천 Nav */}
          <ul className="flex ml-[-100px]">
            <li className="flex justify-center w-[150px] h-[55px] pt-[18px] leading-5 text-center">
              <span className="h-fit-content text-lg font-medium text-gray-700 cursor-pointer">
                신상품
              </span>
            </li>
            <li className="flex justify-center w-[150px] h-[55px] pt-[18px] leading-5 text-center">
              <span className="h-fit-content text-lg font-medium text-gray-700 cursor-pointer">
                베스트
              </span>
            </li>
            <li className="flex justify-center w-[150px] h-[55px] pt-[18px] leading-5 text-center">
              <span className="h-fit-content text-lg font-medium text-gray-700 cursor-pointer">
                알뜰쇼핑
              </span>
            </li>
            <li className="flex justify-center w-[150px] h-[55px] pt-[18px] leading-5 text-center">
              <span className="h-fit-content text-lg font-medium text-gray-700 cursor-pointer">
                특가/혜택
              </span>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
      {/* <Slider /> */}
    </header>
  );
};

export default Header;
