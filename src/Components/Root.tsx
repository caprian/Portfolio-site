import React from "react";
import Header from "./Header";
import "./Root.css";
import ContentWrapper from "./ContentWrapper";
import MainContent from "./MainContent";
import ContentArea from "./ContentArea";

export default function Root() {
	return (
		<div className="root">
			<ContentWrapper>
				<ContentArea />
			</ContentWrapper>
		</div>
	);
}
