import React, { useState } from "react";

interface Props {
    children: React.ReactElement;
    label: string;
    radius: string;
    padding?: string;
}

const IconButtonWithDropdown: React.FunctionComponent<Props> = ({
    label,
    radius,
    children,
    padding = "p-1",
}) => {
    const [showToolTip, setShowToolTip] = useState(false);

    return (
        <button
            className={`relative flex items-center justify-center transition-colors ${padding} ${radius} w-full hover:bg-gray-200/50 active:bg-gray-300/50`}
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
        >
            {children}

            {showToolTip ? (
                <span className="absolute top-[108%] left-[50%] -translate-x-[50%] z-10 bg-black rounded-[4px] py-1 px-2 min-w-max text-xs break-normal">
                    {label}
                </span>
            ) : null}
        </button>
    );
};

export default IconButtonWithDropdown;
