import React from "react";
import { ReactComponent as RocketLoading } from "../../assets/images/launch.svg";
import "./RocketLoader.css";

const RocketLoader = () => (
	<div className="rocket-loader pulse light-theme">
		<RocketLoading className="light-theme" width="100" height="100" />
	</div>
);

export default RocketLoader;
