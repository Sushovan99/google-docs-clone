import React from "react";
import DocumentFormattingSection from "./sections/DocumentHeader";

const Header: React.FunctionComponent = () => {
    return (
        <header className="sticky top-0 left-0 z-40">
            <DocumentFormattingSection />
            <div className="bg-white">Toolbar</div>
        </header>
    );
};

export default Header;
