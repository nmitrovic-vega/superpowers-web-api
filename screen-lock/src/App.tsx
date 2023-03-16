import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import { useWakeLock } from "./useWakeLock";
import "./App.css";

function App() {
	const [isWake, setIsWake] = useState<boolean>(false);
	const [seconds, setSeconds] = useState<number>(60);
	const { isWakeLock } = useWakeLock(isWake);
	const handleSwitch = async ({ target: { checked } }: any) => {
		setIsWake(checked);
	};

	useEffect(() => {
		setInterval(() => {
			setSeconds((seconds) => seconds - 1);
		}, 1000);
	}, []);

	return (
		<div className="App">
			<Switch onChange={handleSwitch} />
			{JSON.stringify(isWakeLock)}
			{seconds}
		</div>
	);
}

export default App;
