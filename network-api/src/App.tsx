import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, Typography, Button } from "@material-ui/core";
import { theme } from "./theme/theme";
import PlanetList from "./components/PlanetList/PlanetList";
import astronaut from "./assets/images/astronaut.png";
import RocketLogo from "./components/RocketLogo/RocketLogo";
import RocketTrail from "./assets/images/rocket-trail.png";
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<RocketLogo />
				<Routes>
					<Route
						path="/"
						element={
							<div className="section">
								<Typography
									variant="h1"
									className="title"
									style={{ position: "relative", color: "white", marginTop: "100px" }}
								>
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
								<img src={RocketTrail} width="100%" />
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
