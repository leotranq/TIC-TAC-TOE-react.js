import React from "react";
import GameBody from "../component/GameBody/GameBody.jsx";
import Title from "../component/Title/Title.jsx";
import BackGround from "../component/BackGround/BackGround.jsx";
import ChooseSide from "../component/ChooseSide/Choose.jsx";

const Home = () => {
	return (
		<>
			<BackGround />
			<GameBody />
			<Title />
			<ChooseSide />
		</>
	);
};

export default Home;
