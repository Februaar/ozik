import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer lg" data-v-1fddaed6 data-v-1d0b532e>
        <div className="inner" data-v-1fddaed6>
          <div className="service_area" data-v-1fddaed6>
            <div className="customer_service" data-v-1fddaed6>
              <strong className="service_title" data-v-1fddaed6>
                고객센터
                <Link
                  to="/customer-service"
                  className="service_tel"
                  data-v-1fddaed6
                >
                  1588-1234
                </Link>
              </strong>
              <div className="service_time" data-v-1fddaed6>
                <dl className="time_box" data-v-1fddaed6>
                  <dt className="time_term" data-v-1fddaed6>
                    운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무) 점심시간
                    평일 13:00 - 14:00
                  </dt>
                </dl>
              </div>
              <p className="service_noti" data-v-1fddaed6>
                1:1 문의하기는 앱에서만 가능합니다.
              </p>
              <div className="service_btn_box" data-v-1fddaed6>
                <Link
                  to="#"
                  className="btn solid small"
                  data-v-43813796
                  data-v-1fddaed6
                >
                  자주 묻는 질문
                </Link>
              </div>
            </div>
            <div className="footer_menu" data-v-1fddaed6>
              <div className="menu_box" data-v-1fddaed6>
                <strong className="menu_title" data-v-1fddaed6>
                  이용안내
                </strong>
                <ul className="menu_list" data-v-1fddaed6>
                  <li className="menu_item" data-v-1fddaed6>
                    <Link className="menu_link">검사기준</Link>
                  </li>
                  <li className="menu_item" data-v-1fddaed6>
                    <Link className="menu_link">이용정책</Link>
                  </li>
                  <li className="menu_item" data-v-1fddaed6>
                    <Link className="menu_link">패널티 정책</Link>
                  </li>
                  <li className="menu_item" data-v-1fddaed6>
                    <Link className="menu_link">커뮤니티 가이드라인</Link>
                  </li>
                </ul>
              </div>
              <div className="menu_box" data-v-1fddaed6>
                <strong className="menu_title" data-v-1fddaed6>
                  고객지원
                </strong>
                <ul className="menu_list" data-v-1fddaed6>
                  <li className="menu_item" data-v-1fddaed6>
                    <Link className="menu_link">공지사항</Link>
                  </li>
                  <li className="menu_item" data-v-1fddaed6>
                    <Link className="menu_link">서비스 소개</Link>
                  </li>
                  <li className="menu_item" data-v-1fddaed6>
                    <Link className="menu_link">스토어 안내</Link>
                  </li>
                  <li className="menu_item" data-v-1fddaed6>
                    <Link className="menu_link">판매자 방문접수</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="notice_area" data-v-1fddaed6>
            <div className="pt-[20px] pb-[30px] text-sm leading-5 text-center bg-gray-200 text-gray-600">
              오직에서 판매되는 상품 중에는 오직에 입점한 개별 판매자가 판매하는
              마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
              <br />
              마켓플레이스(오픈마켓) 상품의 경우 오직은 통신판매중개자로서
              통신판매의 당사자가 아닙니다. 오직은 해당 상품의 주문, 품질,
              교환/환불 등 의무와 책임을 부담하지 않습니다.
              <em className="block pt-[7px] font-normal">
                © OZIK CORP. ALL RIGHTS RESERVED
              </em>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
