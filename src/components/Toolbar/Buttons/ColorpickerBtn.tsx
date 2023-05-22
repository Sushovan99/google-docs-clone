import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import IconButton from "@/components/Buttons/IconButton";
import { FormatColorText } from "@/components/Icons";
import { setTextColor } from "@/store/UI/toolbarSlice";

// Component to pick & change text color
const ColorpickerBtn: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { textColor } = useAppSelector((state) => state.toolbar);

    return (
        <IconButton
            label={"Text color"}
            radius={"rounded-md"}
            activeBg="bg-gray-400/50"
        >
            <label htmlFor="text-color-picker" className="cursor-pointer">
                <div className="relative">
                    <FormatColorText
                        fill="var(--icon-color)"
                        height="20"
                        width="20"
                    />
                    <div
                        className="absolute top-[85%] left-0 w-full h-1"
                        style={{
                            background: textColor,
                        }}
                    ></div>
                </div>
                <input
                    type="color"
                    name="text-color-picker"
                    id="text-color-picker"
                    className="absolute left-0 top-[100%] w-[1px] h-[1px] overflow-clip whitespace-nowrap border-0"
                    value={textColor}
                    onChange={(e) => dispatch(setTextColor(e.target.value))}
                />
            </label>
        </IconButton>
    );
};

export default ColorpickerBtn;
