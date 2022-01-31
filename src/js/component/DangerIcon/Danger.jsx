import React, { useState } from "react";
import "../DangerIcon/Danger.css";

const Danger = (props) => (
	<button onClick={props.onClick}>{props.value}</button>
);
export default Danger;
