import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { sendCartData, fetchData } from "./store/cartActions";

let isInitial = true;
function App() {
	const dispatch = useDispatch();
	const firstRender = useRef(true);

	const notification = useSelector((state) => state.ui.notification);
	const cart = useSelector((state) => state.cart);
	const isAuth = useSelector((state) => state.auth.isLoggedIn);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);
	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		if (cart.changed) dispatch(sendCartData(cart));
	}, [cart, dispatch]);

	return (
		<div className="App">
			{notification && (
				<Notification type={notification.type} msg={notification.msg} />
			)}
			{isAuth ? <Layout /> : <Auth />}
		</div>
	);
}

export default App;
