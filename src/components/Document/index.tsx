import React, { useRef } from "react";
import { useAppSelector } from "@/store/hooks";

// Editable div component, where we can type things that we want in our doc
const Document: React.FunctionComponent = () => {
    const {
        isBold,
        isItalic,
        fontSize,
        textAlign,
        textColor,
        isUnderLine,
        lineHeight,
    } = useAppSelector((state) => state.toolbar);
    const textAreaRef = useRef<HTMLDivElement>(null);
    const checkLineheight = (lineHeight: string) => {
        if (lineHeight === "Single") {
            return "1";
        } else if (lineHeight === "Double") {
            return "2";
        } else {
            return lineHeight;
        }
    };

    return (
        <main className="w-full h-full">
            <div
                className="mx-auto bg-white border border-black/30 max-w-3xl h-auto mt-4 pb-8 rounded-sm"
                onClick={() => textAreaRef.current?.focus()}
            >
                <div
                    id="editable"
                    className="max-w-lg mx-auto min-h-[100vh] mt-[100px] outline-none"
                    contentEditable={true}
                    style={{
                        fontWeight: isBold ? "bold" : "normal",
                        fontStyle: isItalic ? "italic" : "normal",
                        fontSize: fontSize + "px",
                        textAlign: textAlign,
                        color: textColor,
                        textDecoration: isUnderLine ? "underline" : "",
                        lineHeight: checkLineheight(lineHeight),
                    }}
                    ref={textAreaRef}
                ></div>
            </div>
        </main>
    );
};

export default Document;
