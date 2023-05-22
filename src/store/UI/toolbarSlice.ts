import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    fontSize: string;
    isBold: boolean;
    isItalic: boolean;
    isUnderLine: boolean;
    textColor: string;
    textAlign: CanvasTextAlign;
    lineHeight: string;
}

const initialState: InitialState = {
    fontSize: "14",
    isBold: false,
    isItalic: false,
    isUnderLine: false,
    textColor: "black",
    textAlign: "left",
    lineHeight: "1",
};

const toolBarSlice = createSlice({
    name: "toolbarSlice",
    initialState,
    reducers: {
        increaseFont(state) {
            state.fontSize = `${Number(state.fontSize) + 1}`;
        },
        decreaseFontSize(state) {
            state.fontSize = `${Number(state.fontSize) - 1}`;
        },
        setFontSize(state, action: PayloadAction<string>) {
            state.fontSize = action.payload;
        },
        toggleFontWeight(state) {
            state.isBold = !state.isBold;
        },

        toggleItalics(state) {
            state.isItalic = !state.isItalic;
        },

        toggleUnderline(state) {
            state.isUnderLine = !state.isUnderLine;
        },

        setTextAlign(state, action: PayloadAction<CanvasTextAlign>) {
            state.textAlign = action.payload;
        },

        setTextColor(state, action: PayloadAction<string>) {
            state.textColor = action.payload;
        },

        setLineHeight(state, action: PayloadAction<string>) {
            state.lineHeight = action.payload;
        },
    },
});

export default toolBarSlice.reducer;

export const {
    increaseFont,
    decreaseFontSize,
    setFontSize,
    toggleFontWeight,
    toggleItalics,
    setTextAlign,
    setTextColor,
    toggleUnderline,
    setLineHeight,
} = toolBarSlice.actions;
