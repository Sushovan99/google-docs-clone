import React, { useState, useEffect, useRef } from "react";

interface Props {
    fontSize: string;
    label: string;
    changeFontSize: (input: string) => void;
}

const NumberInput: React.FunctionComponent<Props> = ({
    fontSize,
    label,
    changeFontSize,
}) => {
    const [showToolTip, setShowToolTip] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileNameChange = (e: React.ChangeEvent) => {
        changeFontSize((e.target as HTMLInputElement).value);
    };

    useEffect(() => {
        if (document.activeElement === inputRef.current) {
            setShowToolTip(false);
        }
    }, [fontSize]);

    return (
        <div
            className="text-lg text-gray-600 relative rounded-md w-[28px] shrink flex items-center justify-center"
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
            onClick={() => inputRef.current?.select()}
        >
            <input
                ref={inputRef}
                type="text"
                value={fontSize}
                style={{
                    width: "20px",
                }}
                onChange={handleFileNameChange}
                className="border-0 bg-transparent outline outline-1 pl-[1px] text-sm text-gray-600 w-fit h-full rounded-sm outline-offset-0 hover:outline-gray-500 hover:outline-1 focus-visible:outline-2 focus-visible:outline-blue-500"
            />

            {showToolTip ? (
                <span className="absolute top-[100%] left-[50%] -translate-x-[50%] z-10 bg-black text-white rounded-[4px] py-1 px-2 min-w-max text-xs break-normal">
                    {label}
                </span>
            ) : null}
        </div>
    );
};

export default NumberInput;
