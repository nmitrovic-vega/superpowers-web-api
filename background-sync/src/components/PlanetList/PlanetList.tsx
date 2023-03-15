import React, { useEffect, useRef, useState } from "react";
import {
	Button,
	Card,
	CardContent,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Snackbar,
	SnackbarContent,
} from "@material-ui/core";
import Planet from "../Planet/Planet";
import { useNetwork } from "../../hooks";
import LinearProgressWithLabel from "../LinearProgressWithLabel/LinearProgressWithLabel";
import RocketLoader from "../RocketLoader/RocketLoader";
import * as S from "./PlanetList.style";

const PlanetList = ({ planets }: any) => {
	const [open, setOpen] = useState<boolean>(false);
	const [snackOpen, setSnackOpen] = useState<boolean>(false);
	const [progress, setProgress] = useState<number>(10);
	const [feedbackMessage, setFeedbackMessage] = useState<string>("");
	const timer = useRef<any>(null);
	const isFastNetwork = useNetwork();

	useEffect(() => {
		if (open) {
			timer.current = setInterval(
				() => {
					setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + Math.floor(Math.random() * 11)));
				},
				isFastNetwork ? 300 : 800
			);
		} else {
			clearInterval(timer.current);
			setProgress(10);
			setFeedbackMessage("");
		}

		return () => {
			clearInterval(timer.current);
		};
	}, [open, isFastNetwork]);

	useEffect(() => {
		if (!isFastNetwork && progress > 40) {
			setFeedbackMessage("Your reservation is taking longer than expected. Please wait...");
		}
	}, [isFastNetwork, progress]);

	useEffect(() => {
		if (progress >= 100) {
			setOpen(false);
			setSnackOpen(true);
		}
	}, [progress]);

	const handleReservation = () => setOpen(true);

	const handleClose = () => setOpen(false);

	if (!planets?.length) {
		return <RocketLoader />;
	}

	return (
		<>
			<Grid container spacing={2} style={{ padding: "50px", textAlign: "center" }}>
				{planets.slice(0, 100).map((planet: any, index: number) => (
					<Grid key={planet.pl_name} xs={4} item>
						<S.PlanetCard>
							<Card
								variant="outlined"
								style={{
									border: "2px solid #4370f6",
									borderRadius: "10px",
									display: "flex",
									flexDirection: "column",
									backgroundColor: "transparent",
									minHeight: "340px",
								}}
							>
								<CardContent>
									<S.PlanetName>
										<span>Planet name:</span> <p>{planet.pl_name}</p>
									</S.PlanetName>
									<Planet planetId={index % 17} />
									<S.PlanetInfo>
										<p>
											Year of discovery: <span>{planet.disc_year}</span>
										</p>
										<p>
											Light years away: <span>{Math.round(planet.pl_eqt) || 100}</span>
										</p>
									</S.PlanetInfo>
									<Button
										variant="contained"
										color="secondary"
										style={{ margin: "auto", color: "white", textDecoration: "none" }}
										onClick={handleReservation}
									>
										RESERVE
									</Button>
								</CardContent>
							</Card>
						</S.PlanetCard>
					</Grid>
				))}
			</Grid>
			<Dialog onClose={handleClose} open={open}>
				<DialogTitle>Reserving your flight</DialogTitle>
				<DialogContent>
					<S.DialogContent>
						<p>{feedbackMessage}</p>
						<LinearProgressWithLabel value={progress} />
					</S.DialogContent>
				</DialogContent>
				<DialogActions>
					<Button variant="text" color="secondary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				open={snackOpen}
				onClose={() => setSnackOpen(false)}
				autoHideDuration={6000}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			>
				<SnackbarContent
					style={{
						backgroundColor: "#4370f6",
						padding: "10px",
						fontWeight: "bold",
					}}
					message="Flight reserved!"
				/>
			</Snackbar>
		</>
	);
};

export default PlanetList;
