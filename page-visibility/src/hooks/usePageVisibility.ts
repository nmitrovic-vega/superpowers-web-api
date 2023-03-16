import { useEffect, useState } from "react";

export const usePageVisibility = () => {
	const [pageVisible, setPageVisible] = useState<boolean>(true);

	useEffect(() => {
		const handleVisibilityChange = () => {
			const isPageVisible = document.visibilityState === "visible";
			setPageVisible(isPageVisible);
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);

	return pageVisible;
};
