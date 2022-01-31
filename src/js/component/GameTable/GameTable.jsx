import React from "react";
import "../GameTable/GameTable.css";

const Table = (props) => {
	return (
		<div>
			<button
				className="cuadros"
				value="1"
				onClick={() => onClick("value")}
			/>
			<button
				className="cuadros"
				value="2"
				onClick={() => onClick("value")}
			/>
			<button
				className="cuadros"
				value="3"
				onClick={() => onClick("value")}
			/>
			<button
				className="cuadros"
				value="4"
				onClick={() => onClick("value")}
			/>
			<button
				className="cuadros"
				value="5"
				onClick={() => onClick("value")}
			/>
			<button
				className="cuadros"
				value="6"
				onClick={() => onClick("value")}
			/>
			<button
				className="cuadros"
				value="7"
				onClick={() => onClick("value")}
			/>
			<button
				className="cuadros"
				value="8"
				onClick={() => onClick("value")}
			/>
			<button
				className="cuadros"
				value="9"
				onClick={() => onClick("value")}
			/>
		</div>
	);
};

const Button = (props) => (
	<button onClick={props.onClick}>{props.value}</button>
);
export default Table;
