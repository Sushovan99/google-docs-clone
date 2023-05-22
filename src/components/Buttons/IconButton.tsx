import React, { useState } from "react";

interface Props {
    children: React.ReactElement;
    label: string;
    radius: string;
    padding?: string;
    right?: string;
    left?: string;
    bgHover?: string;
    bgActive?: string;
    addClass?: string;
    activeState?: boolean;
    activeBg?: string;
    handler?: () => void;
}

// Iconbutton component with tooltip
const IconButton: React.FunctionComponent<Props> = ({
    label,
    radius,
    children,
    padding = "p-1",
    right = "",
    left = "",
    bgActive = "active:bg-gray-400/50",
    bgHover = "hover:bg-gray-300/50",
    addClass = "",
    activeState,
    activeBg,
    handler,
}) => {
    const [showToolTip, setShowToolTip] = useState(false);

    return (
        <button
            className={`relative flex items-center justify-center transition-all ${padding} ${radius} w-fit ${bgHover} ${bgActive} ${addClass} ${
                activeState ? activeBg : ""
            }`}
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
            onClick={() => {
                if (handler !== undefined) handler();
                setShowToolTip(false);
            }}
        >
            {children}

            {/* Rendering tooltip on hover */}
            {showToolTip ? (
                <span
                    style={{
                        right: right,
                        left: left,
                    }}
                    className={`absolute top-[108%] text-white ${
                        right || left ? "" : "left-[50%] -translate-x-[50%]"
                    } z-10 bg-black rounded-[4px] py-1 px-2 min-w-max text-xs break-normal`}
                >
                    {label}
                </span>
            ) : null}
        </button>
    );
};

export default IconButton;
