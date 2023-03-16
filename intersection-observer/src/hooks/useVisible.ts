import { useState, useEffect, RefObject } from "react";

// Hook
export const useVisible = (
	ref: RefObject<HTMLElement>,
	options = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0,
	}
) => {
	// State and setter for storing whether element is visible
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		if (ref.current) {
			const refCurrent: HTMLElement = ref.current;
			const observer = new IntersectionObserver(([entry]) => {
				// Update our state when observer callback fires
				setIsVisible(entry.isIntersecting);
			}, options);

			// set watcher on element
			observer.observe(refCurrent);

			return () => {
				observer.unobserve(refCurrent);
			};
		}
	}, [ref, options]);

	return isVisible;
};
