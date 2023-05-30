import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cartSlice";
const Cart = () => {
	const quantity = useSelector((state) => state.cart.totalQuantity);
	const dispatch = useDispatch();
	const handleShowCart = () => {
		dispatch(cartActions.setShowCart());
	};
	return (
		<div className="cartIcon" onClick={handleShowCart}>
			<h3>Cart: {quantity} Items</h3>
		</div>
	);
};

export default Cart;
