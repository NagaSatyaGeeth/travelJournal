import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/Header.jsx";
import Card from "./card/card.jsx";
import "./index.css";
import data from "/src/data.js";

const api = data.map((info) => {
	return <Card key={info.id} info={info} />;
});

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<>
		<Header />
		<section className="flex flex-col xl:flex-row">{api}</section>
	</>
);
