import { useState, useEffect, RefObject } from "react";

export const useVisible = (
	ref: RefObject<HTMLElement>,
	options = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0,
	}
) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		if (ref.current) {
			const refCurrent: HTMLElement = ref.current;
			const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), options);

			observer.observe(refCurrent);

			return () => {
				observer.unobserve(refCurrent);
			};
		}
	}, [ref, options]);

	return isVisible;
};
