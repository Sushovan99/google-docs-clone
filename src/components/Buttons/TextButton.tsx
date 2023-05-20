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
}

const TextButton: React.FunctionComponent<Props> = ({
    text,
    menuData,
    children,
    startIcon = false,
    endIcon = false,
    fontWeight = "font-normal",
    padding = "py-[2px] px-[9px]",
    label = "",
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
                }}
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => setShowToolTip(false)}
            >
                {startIcon && <span>{children}</span>}
                <span className="inline-block max-w-[80px] text-ellipsis whitespace-nowrap overflow-hidden">
                    {text}
                </span>
                {endIcon && (
                    <span className="-translate-y-[1px]">{children}</span>
                )}
            </button>

            {label && showToolTip ? (
                <span className="absolute top-[108%] left-[50%] -translate-x-[50%] z-10 bg-black text-white rounded-[4px] py-1 px-2 min-w-max text-xs break-normal">
                    {label}
                </span>
            ) : null}

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
