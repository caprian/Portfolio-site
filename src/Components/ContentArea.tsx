import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import "./ContentArea.css";

export default function ContentArea() {
	return (
		<div className="ps-content-area">
			<Header />
			<MainContent />
		</div>
	);
}
