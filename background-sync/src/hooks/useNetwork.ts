import { useState, useEffect } from "react";

interface INetworkInformation {
	downlink: number;
	effectiveType: ENetworkEffectiveType;
	onchange: () => void;
	rtt: number;
	saveData: boolean;
}

enum ENetworkEffectiveType {
	SLOW_TWO_G = "slow-2g",
	TWO_G = "2g",
	THREE_G = "3g",
	FOUR_G = "4g",
}

export const useNetwork = () => {
	const [isFastNetwork, setIsFastNetwork] = useState<boolean | null>(null);

	const updateConnectionStatus = ({ target: networkInfo }: Event) => {
		const { effectiveType } = networkInfo as unknown as INetworkInformation;
		setIsFastNetwork(effectiveType === ENetworkEffectiveType.FOUR_G);
	};

	useEffect(() => {
		if ("connection" in navigator) {
			const { effectiveType } = (navigator as any).connection;
			setIsFastNetwork(effectiveType === ENetworkEffectiveType.FOUR_G);

			(navigator as any).connection.addEventListener("change", updateConnectionStatus);
		}
	}, []);

	return isFastNetwork;
};
