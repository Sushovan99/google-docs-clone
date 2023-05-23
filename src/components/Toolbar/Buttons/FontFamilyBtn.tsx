import React, { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import TextButton from "@/components/Buttons/TextButton";
import { ArrowDropDown, DoneIcon } from "@/components/Icons";
import VerticalDropDown from "@/components/Dropdown/VerticalDropDown";
import { setFontFamily } from "@/store/UI/toolbarSlice";
import { useClickOutside } from "@/hooks/customHooks/useClickOutside";

const options = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

// Component including Font family button with dropdown
const FontFamilyBtn: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const { fontFamily } = useAppSelector((state) => state.toolbar);
    const dropDownHandler = (val: string) => {
        dispatch(setFontFamily(val));
        setIsDropDownOpen(false);
    };

    useClickOutside(containerRef, () => setIsDropDownOpen(false));

    return (
        <div className="relative" ref={containerRef}>
            <TextButton
                text={fontFamily}
                padding="py-[5px] px-[9px] pr-[2px]"
                label="Font"
                endIcon
                handler={() => setIsDropDownOpen((prev) => !prev)}
            >
                <ArrowDropDown fill="var(--icon-color)" />
            </TextButton>

            {isDropDownOpen && (
                <VerticalDropDown
                    options={options}
                    state={fontFamily}
                    handlers={dropDownHandler}
                >
                    <DoneIcon fill="black" />
                </VerticalDropDown>
            )}
        </div>
    );
};

export default FontFamilyBtn;
