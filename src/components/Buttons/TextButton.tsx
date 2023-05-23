import React, { useState } from "react";

interface Props {
    text: string;
    menuData?: string[];
    children?: React.ReactElement;
    startIcon?: boolean;
    endIcon?: boolean;
    fontWeight?: string;
    padding?: string;
    label?: string;
    handler?: () => void;
}

// Textbutton component with tooltip.
const TextButton: React.FunctionComponent<Props> = ({
    text,
    menuData,
    children,
    startIcon = false,
    endIcon = false,
    fontWeight = "font-normal",
    padding = "py-[2px] px-[9px]",
    label = "",
    handler,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showToolTip, setShowToolTip] = useState(false);

    return (
        <div className="relative">
            <button
                className={`flex h-fit gap-2 text-sm transition-colors text-black/80 ${fontWeight} ${padding} rounded-md hover:bg-slate-200`}
                onClick={() => {
                    setIsOpen(true);
                    setShowToolTip(false);
                    if (handler !== undefined) handler();
                }}
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => setShowToolTip(false)}
            >
                {/* For showing start-icon */}
                {startIcon && <span>{children}</span>}

                {/* Conditionally showing text */}
                <span className="inline-block max-w-[80px] text-ellipsis whitespace-nowrap overflow-hidden">
                    {text}
                </span>

                {/* Conditionally showing end-icon */}
                {endIcon && (
                    <span className="-translate-y-[1px]">{children}</span>
                )}
            </button>

            {/* Conditionally showing tooltip */}
            {label && showToolTip ? (
                <span className="absolute top-[108%] left-[50%] -translate-x-[50%] z-10 bg-black text-white rounded-[4px] py-1 px-2 min-w-max text-xs break-normal">
                    {label}
                </span>
            ) : null}

            {/* Code for showing dropdown (not-implemented) */}
            {isOpen ? (
                <ul className="absolute top-[100%] left-0 py-1 max-w-xs">
                    {menuData?.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default TextButton;
