import React, { useState, useRef, useEffect } from "react";

interface Props {
    text: string;
    label: string;
    changeName: (input: string) => void;
}

const FileNameInput: React.FunctionComponent<Props> = ({
    text,
    label,
    changeName,
}) => {
    const [showToolTip, setShowToolTip] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileNameChange = (e: React.ChangeEvent) => {
        changeName((e.target as HTMLInputElement).value);
    };
    const handleOnBlur = () => {
        if (text.length === 0) {
            changeName("Untitled document");
        }
        document.title = `${text ? text : "Untitled document"} - Google Docs`;
    };

    useEffect(() => {
        if (document.activeElement === inputRef.current) {
            setShowToolTip(false);
        }
    }, [text]);

    return (
        <div
            className="text-lg text-gray-600 relative rounded-md w-fit shrink"
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
            onClick={() => inputRef.current?.select()}
        >
            <input
                ref={inputRef}
                type="text"
                value={text}
                style={{
                    width: `calc(${text.length * 10}px + 20px)`,
                }}
                onChange={handleFileNameChange}
                onBlur={handleOnBlur}
                className="py-[1px] px-[8px] bg-transparent border-0 text-gray-600 min-w-[1px] h-full rounded-sm outline-none outline-offset-0 hover:outline-gray-500 hover:outline-1 focus-visible:outline-2 focus-visible:outline-blue-500"
            />

            {showToolTip ? (
                <span className="absolute top-[100%] left-[50%] -translate-x-[50%] z-10 bg-black text-white rounded-[4px] py-1 px-2 min-w-max text-xs break-normal">
                    {label}
                </span>
            ) : null}
        </div>
    );
};

export default FileNameInput;
