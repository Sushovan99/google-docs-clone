import React, { useState } from "react";
import DocumentFormattingSection from "./sections/DocumentHeader";
import Toolbar from "../Toolbar/Toolbar";

// Header containing side-panel, primary toolbar and secondary doc formatting options
const Header: React.FunctionComponent = () => {
    const [isMenuHidden, setIsMenuHidden] = useState(false);
    return (
        <header className="sticky top-0 left-0 z-40">
            {!isMenuHidden ? <DocumentFormattingSection /> : null}

            <Toolbar setIsMenuHidden={setIsMenuHidden} />
        </header>
    );
};

export default Header;
