import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decreaseFontSize, increaseFont } from "@/store/UI/toolbarSlice";
import IconButton from "@/components/Buttons/IconButton";
import { AddIcon, RemoveIcon } from "@/components/Icons";
import NumberInput from "@/components/Input/NumberInput";

// Component to set fontsize
const ChangeFontSize: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { fontSize } = useAppSelector((state) => state.toolbar);
    return (
        <div className="flex items-center">
            <IconButton
                label={"Decrease font size"}
                radius={"rounded-md"}
                handler={() => dispatch(decreaseFontSize())}
            >
                <RemoveIcon fill="var(--icon-color)" />
            </IconButton>

            <div>
                <NumberInput fontSize={fontSize} label="Font size" />
            </div>

            <IconButton
                label={"Increase font size"}
                radius={"rounded-md"}
                handler={() => dispatch(increaseFont())}
            >
                <AddIcon fill="var(--icon-color)" />
            </IconButton>
        </div>
    );
};

export default ChangeFontSize;
