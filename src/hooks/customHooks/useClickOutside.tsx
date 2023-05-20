import { useEffect } from "react";

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
    }, [ref, handler]);
};