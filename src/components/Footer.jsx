const Footer = () => {
  return (
    <footer className="min-h-[1px] pt-[40px]">
      <div className="pt-[30px]">
        <div id="footer" className="w-[1050px] mx-auto">
          <div className="flex pb-[30px] justify-between overflow-hidden">
            <div>
              <h2 className="pb-[17px] font-medium leading-7 text-[20px]">
                고객만족센터
              </h2>
              <strong className="block pb-[20px] text-[28px] leading-[40px]">
                1644-0227
                <span className="ml-[8px] text-normal text-lg">
                  월~토요일 오전 9시 - 오후 6시
                </span>
              </strong>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <button className="block w-[140px] h-[40px] border-[1px] border-gray-300 bg-gray-100 rounded-xl leading-[39px] text-center mr-[16px] mb-[16px]">
                    카카오톡 문의
                  </button>
                  <div className="mt-[2px] text-gray-500 tracking-tighter leading-4">
                    월~토요일 | 오전 9시 - 오후 6시
                    <br />
                    일/공휴일 | 오전 9시 - 오후 6시
                  </div>
                </div>
                <div>
                  <div className="flex flex-row">
                    <button className="block w-[140px] h-[40px] border-[1px] border-gray-300 bg-gray-100 rounded-xl leading-[39px] text-center mr-[16px] mb-[16px]">
                      1:1 문의
                    </button>
                    <div className="mt-[2px] text-gray-500 tracking-tighter leading-4">
                      365일
                      <br />
                      고객센터 운영시간에 순차적으로 답변드리겠습니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex justify-between pt-[26px] pb-[33px] border-t border-gray-300">
            {/* <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button> */}
          </div>
        </div>
        <div className="pt-[20px] pb-[30px] text-sm leading-5 text-center bg-gray-200 text-gray-600">
          오직에서 판매되는 상품 중에는 오직에 입점한 개별 판매자가 판매하는
          마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          <br />
          마켓플레이스(오픈마켓) 상품의 경우 오직은 통신판매중개자로서
          통신판매의 당사자가 아닙니다. 오직은 해당 상품의 주문, 품질, 교환/환불
          등 의무와 책임을 부담하지 않습니다.
          <em className="block pt-[7px] font-normal">
            © OZIK CORP. ALL RIGHTS RESERVED
          </em>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
