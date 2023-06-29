import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>장바구니</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}원
          </li>
        ))}
      </ul>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;

{
  /* 장바구니 연결 */
}
<div className="relative w-[1050px] mx-auto">
  <div className="absolute flex items-center justify-center top-[-49px] right-[0px]">
    <button className="w-[36px] h-[36px] mr-[15px]" aria-label="구매내역">
      <img
        src="./images/calendar.svg"
        alt="box-img"
        className="w-[22px] h-[22px] mx-auto"
      />
    </button>
    <button className="w-[36px] h-[36px] mx-[5px]" aria-label="구독하기">
      <img
        src="./images/subscribe.svg"
        alt="box-img"
        className="w-[22px] h-[22px] mx-auto"
      />
    </button>
    <button className="w-[36px] h-[36px] ml-[15px]" aria-label="마이페이지">
      <img
        src="./images/person.svg"
        alt="box-img"
        className="w-[22px] h-[22px] mx-auto"
      />
    </button>
  </div>
</div>;
