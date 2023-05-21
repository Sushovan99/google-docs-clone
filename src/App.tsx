import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { toggleSidePanel } from "@/store/UI/sidePanelSlice";
import Header from "@/components/Header";
import { KeyBoardArrowLeft } from "./components/Icons";
import Document from "./components/Document";

const App: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const [showToolTip, setShowToolTip] = useState(false);
    const isSidePanelOpen = useAppSelector(
        (state) => state.sidpepanel.isSidePanelOpen
    );
    const setIsSidePanelOpen = () => {
        dispatch(toggleSidePanel());
    };

    return (
        <div className="relative mb-3">
            {/* Main component related to doc formatting & editing */}

            <Header />

            {/* Component for rendering the document or page */}
            <Document />

            {/* Button for toggling the side-panel */}
            <button
                className={`fixed ${
                    isSidePanelOpen ? "right-1" : "-right-3 hover:right-0"
                } bottom-5 bg-gray-200/80 flex items-center justify-center h-10 w-10`}
                onClick={() => {
                    setIsSidePanelOpen();
                    setShowToolTip(false);
                }}
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => setShowToolTip(false)}
                style={{
                    transition: "all .3s ease",
                    borderTopRightRadius: `${!isSidePanelOpen ? "0px" : "50%"}`,
                    borderBottomRightRadius: `${
                        !isSidePanelOpen ? "0px" : "50%"
                    }`,
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%",
                }}
            >
                <div className="relative">
                    <span>
                        <KeyBoardArrowLeft
                            fill="var(--icon-color)"
                            addClass={`${
                                isSidePanelOpen ? "rotate-180" : "rotate-0"
                            } transition-transform duration-300`}
                        />
                    </span>

                    {/* Conditionally showing tooltips */}
                    {showToolTip ? (
                        <span
                            className={`absolute top-[108%] right-0 text-white z-10 bg-black rounded-[4px] py-1 px-2 min-w-max text-xs break-normal`}
                        >
                            {isSidePanelOpen ? "Hide panel" : "Show panel"}
                        </span>
                    ) : null}
                </div>
            </button>
        </div>
    );
};

export default App;
