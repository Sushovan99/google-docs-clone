import { useEffect } from "react";

// Custom hook to handle click outside events
export const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    handler: VoidFunction
) => {
    useEffect(() => {
        const clickOutsideHandler = (e: any) => {
            if (!ref.current) {
                return;
            }
            if (ref.current.contains(e.target)) {
                return;
            } else {
                handler();
            }
        };

        document.addEventListener("mousedown", clickOutsideHandler);
        return () => {
            document.removeEventListener("mousedown", clickOutsideHandler);
        };
    }, [ref, handler]);
};
