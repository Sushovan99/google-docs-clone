import React, { useState } from "react";

interface Props {
    text: string;
    children?: React.ReactElement;
    startIcon?: boolean;
    endIcon?: boolean;
    label: string;
}

const PillIconButton: React.FunctionComponent<Props> = ({
    text,
    startIcon,
    endIcon,
    children,
    label,
}) => {
    const [showToolTip, setShowToolTip] = useState(false);
    return (
        <button
            className="relative flex items-center gap-2 rounded-3xl bg-[#C2E7FF] hover:bg-[#b3daf5] py-3 px-5 text-sm text-black hover:shadow-md active:shadow-none"
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
        >
            {startIcon && <span>{children}</span>}
            <span>{text}</span>
            {endIcon && <span>{children}</span>}

            {showToolTip ? (
                <span className="absolute top-[108%] left-[50%] -translate-x-[50%] z-10 bg-black text-white rounded-[4px] py-1 px-2 min-w-max text-xs break-normal">
                    {label}
                </span>
            ) : null}
        </button>
    );
};

export default PillIconButton;
