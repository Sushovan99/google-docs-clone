import React from "react";
import DocumentFormattingSection from "./sections/DocumentHeader";
import Toolbar from "../Toolbar/Toolbar";

const Header: React.FunctionComponent = () => {
    return (
        <header className="sticky top-0 left-0 z-40">
            <DocumentFormattingSection />
            <Toolbar />
        </header>
    );
};

export default Header;
