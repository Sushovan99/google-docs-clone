import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import IconButton from "@/components/Buttons/IconButton";
import { FormatUnderlined } from "@/components/Icons";
import { toggleUnderline } from "@/store/UI/toolbarSlice";

// Component to add/remove underline
const ToggleUnderlineBtn: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { isUnderLine } = useAppSelector((state) => state.toolbar);
    return (
        <IconButton
            label={"Underline"}
            radius={"rounded-md"}
            handler={() => dispatch(toggleUnderline())}
            activeState={isUnderLine}
            activeBg="bg-[#D3E3FD]"
        >
            <FormatUnderlined fill="var(--icon-color)" height="20" width="20" />
        </IconButton>
    );
};

export default ToggleUnderlineBtn;
