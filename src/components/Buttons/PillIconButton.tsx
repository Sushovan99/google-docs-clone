import React, { useState } from "react";

interface Props {
    children?: React.ReactElement;
    label: string;
    padding?: string;
    bg?: string;
    hoverBg?: string;
    activeBg?: string;
}

const PillIconButton: React.FunctionComponent<Props> = ({
    children,
    label,
    padding = "py-3 px-5",
    bg = "bg-[#C2E7FF]",
    hoverBg = "hover:bg-[#b3daf5]",
    activeBg = "",
}) => {
    const [showToolTip, setShowToolTip] = useState(false);
    return (
        <button
            className={`relative flex items-center gap-2 rounded-3xl ${bg} ${hoverBg} ${padding} ${activeBg} text-sm text-black hover:shadow-md active:shadow-none`}
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
        >
            {children}

            {showToolTip ? (
                <span className="absolute top-[108%] left-[50%] -translate-x-[50%] z-10 bg-black text-white rounded-[4px] py-1 px-2 min-w-max text-xs break-normal">
                    {label}
                </span>
            ) : null}
        </button>
    );
};

export default PillIconButton;
