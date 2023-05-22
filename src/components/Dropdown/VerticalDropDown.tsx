import React from "react";
import { useAppSelector } from "@/store/hooks";

interface Props {
    width?: string;
    options: string[];
    handlers: (val: string) => void;
    children?: React.ReactElement;
}

// Component for displaying vertical dropdown
const VerticalDropDown: React.FunctionComponent<Props> = ({
    width = "w-[200px]",
    options = ["Option 1"],
    handlers,
    children,
}) => {
    const { lineHeight } = useAppSelector((state) => state.toolbar);

    return (
        <ul
            className={`absolute top-[100%] left-0 shadow-lg rounded-md bg-white z-30 flex flex-col px-[1px] py-1 ${width}`}
        >
            {options.map((value, index) => (
                <li
                    key={index}
                    onClick={() => handlers(value)}
                    className="flex items-center gap-2 px-3 py-1 rounded-sm font-base text-sm text-black hover:bg-gray-200/80"
                >
                    <span
                        className={`${
                            lineHeight === value ? "visible" : "invisible"
                        }`}
                    >
                        {children}
                    </span>
                    {value}
                </li>
            ))}
        </ul>
    );
};

export default VerticalDropDown;
