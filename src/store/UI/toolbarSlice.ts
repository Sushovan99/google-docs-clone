import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    fontSize: string;
    isBold: boolean;
    isItalic: boolean;
    isUnderLine: boolean;
}

const initialState: InitialState = {
    fontSize: "14",
    isBold: false,
    isItalic: false,
    isUnderLine: false,
};

const toolBarSlice = createSlice({
    name: "toolbarSlice",
    initialState,
    reducers: {
        setFontsize(state, action: PayloadAction<string>) {
            state.fontSize = action.payload;
        },
    },
});

export default toolBarSlice.reducer;

export const { setFontsize } = toolBarSlice.actions;
