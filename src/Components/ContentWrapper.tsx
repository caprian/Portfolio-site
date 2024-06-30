import React from "react";
import "./ContentWrapper.css";

interface ContentWrapperProps {
	children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
	return <div className="ps-content-wrapper">{children}</div>;
}
