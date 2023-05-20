import React from "react";
import DocumentFormattingSection from "./sections/DocumentHeader";
import Toolbar from "../Toolbar/Toolbar";

// Header containing side-panel, primary toolbar and secondary doc formatting options
const Header: React.FunctionComponent = () => {
    return (
        <header className="sticky top-0 left-0 z-40">
            <DocumentFormattingSection />
            <Toolbar />
        </header>
    );
};

export default Header;
