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
