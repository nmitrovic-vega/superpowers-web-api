import React, { useRef } from "react";
import astronaut from "./assets/astronaut.png";
import { useVisible } from "./hooks/useVisible";
import "./App.css";

function App() {
	const astronautRef = useRef<HTMLImageElement>(null);
	const isVisible = useVisible(astronautRef);

	return (
		<div className="space">
			<div className="empty" />
			<div className="astronaut-wrapper">
				{isVisible && (
					<div className="astronaut-salute">
						<div className="astronaut-salute__circle astronaut-salute__circle--small"></div>
						<div className="astronaut-salute__circle astronaut-salute__circle--medium"></div>
						<p>Zdravo svete!</p>
					</div>
				)}
				<img src={astronaut} className="astronaut" alt="astronaut" ref={astronautRef} />
			</div>
		</div>
	);
}

export default App;
