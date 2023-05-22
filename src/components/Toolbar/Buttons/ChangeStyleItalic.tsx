import React from "react";
import IconButton from "@/components/Buttons/IconButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleItalics } from "@/store/UI/toolbarSlice";
import { FormatItalics } from "@/components/Icons";

// Component to change text style
const ChangeStyleItalic: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { isItalic } = useAppSelector((state) => state.toolbar);
    return (
        <IconButton
            label={"Italic"}
            radius={"rounded-md"}
            handler={() => dispatch(toggleItalics())}
            activeState={isItalic}
            activeBg="bg-[#D3E3FD]"
        >
            <FormatItalics fill="var(--icon-color)" height="20" width="20" />
        </IconButton>
    );
};

export default ChangeStyleItalic;
