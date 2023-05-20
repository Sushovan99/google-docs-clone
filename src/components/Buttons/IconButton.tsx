import React, { useState } from "react";

interface Props {
    children: React.ReactElement;
    label: string;
    radius: string;
    padding?: string;
    right?: string;
    bgHover?: string;
    bgActive?: string;
    handler?: () => void;
}

const IconButtonWithDropdown: React.FunctionComponent<Props> = ({
    label,
    radius,
    children,
    padding = "p-1",
    right = "",
    bgActive = "active:bg-gray-400/50",
    bgHover = "hover:bg-gray-300/50",
    handler,
}) => {
    const [showToolTip, setShowToolTip] = useState(false);

    return (
        <button
            className={`relative flex items-center justify-center transition-colors ${padding} ${radius} w-fit ${bgHover} ${bgActive}`}
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
            onClick={() => {
                if (handler !== undefined) handler();
                setShowToolTip(false);
            }}
        >
            {children}

            {showToolTip ? (
                <span
                    style={{
                        right: right,
                    }}
                    className={`absolute top-[108%] text-white ${
                        right ? "" : "left-[50%] -translate-x-[50%]"
                    } z-10 bg-black rounded-[4px] py-1 px-2 min-w-max text-xs break-normal`}
                >
                    {label}
                </span>
            ) : null}
        </button>
    );
};

export default IconButtonWithDropdown;
