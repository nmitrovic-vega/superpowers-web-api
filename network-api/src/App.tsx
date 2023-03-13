import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, Typography, Button } from "@material-ui/core";

import { theme } from "./theme/theme";
import PlanetList from "./components/PlanetList/PlanetList";
import astronaut from "./assets/images/astronaut.png";
import RocketLogo from "./components/RocketLogo/RocketLogo";
import "./App.css";

function App() {
	const [planets, setPlanets] = useState<[]>([]);

	useEffect(() => {
		const broadcast = new BroadcastChannel("count-channel");

		broadcast.onmessage = ({ data: { planets } }) => {
			setPlanets(planets);
		};

		return () => broadcast.close();
	}, []);

	const handlePrefetch = async () => {
		const registration: any = await navigator.serviceWorker.ready;

		try {
			await registration.sync.register("sync-messages");
		} catch {
			console.log("Background Sync could not be registered!");
		}
	};

	useEffect(() => {
		(async () => {
			navigator.serviceWorker.ready.then((registration: any) => {
				registration.sync.getTags().then((tags: any) => {
					if (tags.includes("sync-messages")) console.log("Messages sync already requested");
				});
			});
		})();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<RocketLogo />
				<Routes>
					<Route
						path="/"
						element={
							<div className="section">
								<Typography variant="h1" className="title" style={{ position: "relative", color: "white" }}>
									Svemirko.rs
									<img src={astronaut} className="astronaut" alt="astronaut" />
								</Typography>
								<Link
									to="rocket"
									style={{
										display: "block",
										margin: "20px 0 50px 0",
										textAlign: "center",
										textDecoration: "none",
										fontWeight: "bold",
									}}
								>
									<Button
										variant="contained"
										onMouseEnter={handlePrefetch}
										color="secondary"
										style={{
											margin: "auto",
											color: "white",
											textDecoration: "none",
											borderRadius: "10px",
											padding: "15px 20px",
										}}
									>
										RESERVE A FLIGHT
									</Button>
								</Link>
							</div>
						}
					/>
					<Route path="/rocket" element={<PlanetList />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
