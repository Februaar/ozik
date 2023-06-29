{
  /* 검색 바 */
}
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
</div>;
