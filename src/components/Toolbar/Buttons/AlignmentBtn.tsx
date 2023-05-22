import React, { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import IconButton from "@/components/Buttons/IconButton";
import {
    AlignRight,
    AlignJustify,
    AlighCenter,
    AlignLeft,
    ArrowDropDown,
} from "@/components/Icons";
import HorizontalDropdown from "@/components/Dropdown/HorizontalDropdown";
import { setTextAlign } from "@/store/UI/toolbarSlice";
import { useClickOutside } from "@/hooks/customHooks/useClickOutside";

interface AlignProps {
    alignMent: string;
}

const ShowAlignIcon: React.FunctionComponent<AlignProps> = ({ alignMent }) => {
    if (alignMent === "right") {
        return <AlignRight fill="black" />;
    }

    if (alignMent === "center") {
        return <AlighCenter fill="black" />;
    }

    if (alignMent === "justify") {
        return <AlignJustify fill="black" />;
    }

    return <AlignLeft fill="black" />;
};

// Component to set text-alignment
const AlignMent: React.FunctionComponent = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const [showDropDown, setShowDropDown] = useState(false);
    const { textAlign } = useAppSelector((state) => state.toolbar);

    useClickOutside(containerRef, () => setShowDropDown(false));

    return (
        <div className="relative" ref={containerRef}>
            <IconButton
                label={"Align"}
                radius={"rounded-md"}
                padding="px-1 py-[5px] pr-4"
                handler={() => setShowDropDown((prev) => !prev)}
                activeState={showDropDown}
                activeBg="bg-gray-400/50"
                bgHover={
                    showDropDown
                        ? "hover:bg-gray-400/50"
                        : "hover:bg-gray-300/50"
                }
            >
                <div className="relative">
                    <ShowAlignIcon alignMent={textAlign} />
                    <span className="absolute top-0 -right-4">
                        <ArrowDropDown fill="black" height="16" width="16" />
                    </span>
                </div>
            </IconButton>

            {showDropDown && (
                <HorizontalDropdown>
                    <>
                        <IconButton
                            label="Left align"
                            radius="rounded-md"
                            handler={() => dispatch(setTextAlign("left"))}
                        >
                            <AlignLeft fill="black" />
                        </IconButton>

                        <IconButton
                            label="Center align"
                            radius="rounded-md"
                            handler={() => dispatch(setTextAlign("center"))}
                        >
                            <AlighCenter fill="black" />
                        </IconButton>

                        <IconButton
                            label="Right align"
                            radius="rounded-md"
                            handler={() => dispatch(setTextAlign("right"))}
                        >
                            <AlignRight fill="black" />
                        </IconButton>

                        <IconButton
                            label="Justify"
                            radius="rounded-md"
                            handler={() => dispatch(setTextAlign("start"))}
                        >
                            <AlignJustify fill="black" />
                        </IconButton>
                    </>
                </HorizontalDropdown>
            )}
        </div>
    );
};

export default AlignMent;
