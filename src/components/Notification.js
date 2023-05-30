import React from "react";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";

export default function Notification({ type, msg }) {
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(
			uiActions.showNotification({
				open: false,
			})
		);
	};
	const open = useSelector((state) => state.ui.notification?.open);
	return (
		<div>
			{open && (
				<Alert onClose={handleClose} severity={type}>
					{msg}
				</Alert>
			)}
		</div>
	);
}
