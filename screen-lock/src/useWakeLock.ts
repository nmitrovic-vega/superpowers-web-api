import { useEffect, useCallback, useRef } from "react";

export const useWakeLock = (shouldWakeLock: boolean = false) => {
	let sentinel = useRef<WakeLockSentinel | null>(null);

	const requestWakeLockSentinel = useCallback(async () => {
		sentinel.current = await navigator.wakeLock.request("screen");
	}, []);

	const releaseWakeLockSentinel = useCallback(async () => {
		await sentinel.current?.release();
		sentinel.current = null;
	}, []);

	useEffect(() => {
		(async () => {
			if (shouldWakeLock) {
				requestWakeLockSentinel();

				return releaseWakeLockSentinel;
			}

			releaseWakeLockSentinel();
		})();
	}, [shouldWakeLock, requestWakeLockSentinel, releaseWakeLockSentinel]);

	return { isWakeLock: !!sentinel.current };
};
