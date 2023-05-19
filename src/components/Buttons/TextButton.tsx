import React, { useState } from "react";

interface Props {
    text: string;
    menuData?: string[];
}

const TextButton: React.FunctionComponent<Props> = ({ text, menuData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className="text-sm transition-colors text-black/80 font-normal py-[2px] px-[9px] rounded-md hover:bg-slate-200"
                onClick={() => setIsOpen(true)}
            >
                {text}
            </button>

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
