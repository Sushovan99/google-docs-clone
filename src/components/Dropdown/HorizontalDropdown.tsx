import React from "react";

interface Props {
    children: React.ReactElement;
}

const HorizontalDropdown: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <div className="flex gap-[2px] p-1 shadow-md bg-toolbar absolute top-[100%] left-0">
            {children}
        </div>
    );
};

export default HorizontalDropdown;
