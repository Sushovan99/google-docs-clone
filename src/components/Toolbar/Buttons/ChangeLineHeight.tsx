import React, { useRef, useState } from "react";
import IconButton from "@/components/Buttons/IconButton";
import { LineSpacingIcon } from "@/components/Icons";
import VerticalDropDown from "@/components/Dropdown/VerticalDropDown";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLineHeight } from "@/store/UI/toolbarSlice";
import { DoneIcon } from "@/components/Icons";
import { useClickOutside } from "@/hooks/customHooks/useClickOutside";

const options = ["Single", "1.15", "1.5", "Double"];

// Component to change line-height
const ChangeLineHeight: React.FunctionComponent = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const { lineHeight } = useAppSelector((state) => state.toolbar);
    const dispatch = useAppDispatch();
    const handler = (val: string) => {
        dispatch(setLineHeight(val));
        setIsDropDownOpen(false);
    };

    useClickOutside(containerRef, () => setIsDropDownOpen(false));

    return (
        <div className="relative" ref={containerRef}>
            <IconButton
                label={"Line & paragraph spacing"}
                radius={"rounded-md"}
                handler={() => setIsDropDownOpen((prev) => !prev)}
            >
                <LineSpacingIcon
                    fill="var(--icon-color)"
                    height="20"
                    width="20"
                />
            </IconButton>

            {isDropDownOpen && (
                <VerticalDropDown
                    width="w-[250px]"
                    options={options}
                    state={lineHeight}
                    handlers={handler}
                >
                    <DoneIcon fill="black" />
                </VerticalDropDown>
            )}
        </div>
    );
};

export default ChangeLineHeight;
