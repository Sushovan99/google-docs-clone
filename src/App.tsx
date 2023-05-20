import React, { useState, createContext } from "react";
import Header from "@/components/Header";
import { KeyBoardArrowLeft } from "./components/Icons";
import Document from "./components/Document";

export const SidebarContext = createContext(false);

const App: React.FunctionComponent = () => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const [showToolTip, setShowToolTip] = useState(false);

    return (
        <div className="relative">
            {/* Main component related to doc formatting & editing */}
            <SidebarContext.Provider value={isSidePanelOpen}>
                <Header />
            </SidebarContext.Provider>

            {/* <Layout /> */}

            <Document />

            <button
                className={`fixed ${
                    isSidePanelOpen ? "right-1" : "-right-3 hover:right-0"
                } bottom-5 bg-gray-200/80 flex items-center justify-center h-10 w-10`}
                onClick={() => {
                    setIsSidePanelOpen((prev) => !prev);
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
                    <span
                        className={`${
                            isSidePanelOpen ? "rotate-180" : "rotate-0"
                        } transition-transform duration-300`}
                    >
                        <KeyBoardArrowLeft fill="var(--icon-color)" />
                    </span>
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
