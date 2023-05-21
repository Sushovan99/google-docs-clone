import { createSlice } from "@reduxjs/toolkit";

interface InititalState {
    isSidePanelOpen: boolean;
}

const initialState: InititalState = {
    isSidePanelOpen: false,
};

const SidePanelSlice = createSlice({
    name: "sidepanel",
    initialState,
    reducers: {
        toggleSidePanel(state) {
            state.isSidePanelOpen = !state.isSidePanelOpen;
        },
    },
});

export default SidePanelSlice.reducer;

export const { toggleSidePanel } = SidePanelSlice.actions;
