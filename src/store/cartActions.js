import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

export const sendCartData = (cartItems) => async (dispatch) => {
	dispatch(
		uiActions.showNotification({
			type: "warning",
			msg: "Sending Request...",
			open: true,
		})
	);
	const sendRequest = async () => {
		const response = await fetch(
			"https://redux-shopping-cart-49cc6-default-rtdb.firebaseio.com/cartItems.json",
			{
				method: "PUT",
				body: JSON.stringify(cartItems),
			}
		);
		await response.json();

		dispatch(
			uiActions.showNotification({
				type: "success",
				msg: "Request Sent Successfully to DB",
				open: true,
			})
		);
	};
	try {
		await sendRequest();
	} catch (error) {
		dispatch(
			uiActions.showNotification({
				type: "error",
				msg: "Error Sending Request to DB",
				open: true,
			})
		);
	}
};

export const fetchData = () => async (dispatch) => {
	const fetchHandler = async () => {
		const response = await fetch(
			"https://redux-shopping-cart-49cc6-default-rtdb.firebaseio.com/cartItems.json"
		);
		const data = await response.json();

		return data;
	};
	try {
		const cartData = await fetchHandler();
		dispatch(cartActions.replaceData(cartData));
	} catch (err) {
		dispatch(
			uiActions.showNotification({
				type: "error",
				msg: "Error Fetching Data from DB",
				open: true,
			})
		);
	}
};
