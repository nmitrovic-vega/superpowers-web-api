import React, { useEffect, useState } from "react";
import PlanetImg1 from "../../assets/images/Planet_1";
import PlanetImg2 from "../../assets/images/Planet_2";
import PlanetImg3 from "../../assets/images/Planet_3";
import PlanetImg4 from "../../assets/images/Planet_4";
import PlanetImg5 from "../../assets/images/Planet_5";
import PlanetImg6 from "../../assets/images/Planet_6";
import PlanetImg7 from "../../assets/images/Planet_7";
import PlanetImg8 from "../../assets/images/Planet_8";
import PlanetImg9 from "../../assets/images/Planet_9";
import PlanetImg10 from "../../assets/images/Planet_10";
import PlanetImg11 from "../../assets/images/Planet_11";
import PlanetImg12 from "../../assets/images/Planet_12";
import PlanetImg13 from "../../assets/images/Planet_13";
import PlanetImg14 from "../../assets/images/Planet_14";
import PlanetImg15 from "../../assets/images/Planet_15";
import PlanetImg16 from "../../assets/images/Planet_16";
import PlanetImg17 from "../../assets/images/Planet_17";

const planetMap: any = {
	0: PlanetImg1,
	1: PlanetImg2,
	2: PlanetImg3,
	3: PlanetImg4,
	4: PlanetImg5,
	5: PlanetImg6,
	6: PlanetImg7,
	7: PlanetImg8,
	8: PlanetImg9,
	9: PlanetImg10,
	10: PlanetImg11,
	11: PlanetImg12,
	12: PlanetImg13,
	13: PlanetImg14,
	14: PlanetImg15,
	15: PlanetImg16,
	16: PlanetImg17,
};

const Planet = ({ planetId }: any) => {
	const PlanetComponent = planetMap[planetId];

	return (
		<div style={{ height: "150px", display: "flex", justifyContent: "center" }}>
			{React.createElement(PlanetComponent)}
		</div>
	);
};

export default Planet;
