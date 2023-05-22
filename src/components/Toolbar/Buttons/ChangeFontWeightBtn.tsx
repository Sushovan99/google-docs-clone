import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleFontWeight } from "@/store/UI/toolbarSlice";
import IconButton from "@/components/Buttons/IconButton";
import { FormatBoldIcon } from "@/components/Icons";

// Component to toggle font-weight
const ChangeFontWeightBtn: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { isBold } = useAppSelector((state) => state.toolbar);
    return (
        <IconButton
            label={"Bold"}
            radius={"rounded-md"}
            handler={() => dispatch(toggleFontWeight())}
            activeState={isBold}
            activeBg="bg-[#D3E3FD]"
        >
            <FormatBoldIcon fill="var(--icon-color)" height="20" width="20" />
        </IconButton>
    );
};

export default ChangeFontWeightBtn;
