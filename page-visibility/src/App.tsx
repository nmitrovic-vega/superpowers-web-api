import React, { useEffect, useRef } from "react";
import { usePageVisibility } from "./hooks/usePageVisibility";
import "./App.css";

function App() {
	const isVisible = usePageVisibility();
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (!isVisible && audioRef.current) {
			audioRef.current.pause();
		}
	}, [isVisible]);

	return (
		<div className="App">
			<header className="App-header">
				<audio controls src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3" ref={audioRef}></audio>
			</header>
		</div>
	);
}

export default App;
