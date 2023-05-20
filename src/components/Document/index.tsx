import React, { useRef, useState } from "react";
import useAutosizeTextArea from "@/hooks/customHooks/useAutoResizeTextArea";

// Text Area component, where we can type/add things that we want in our doc
const Document: React.FunctionComponent = () => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, value);

    return (
        <main className="w-full h-full">
            <div
                className="mx-auto bg-white border border-black/30 max-w-3xl h-auto mt-4 pb-8 rounded-sm"
                onClick={() => textAreaRef.current?.focus()}
            >
                <div className="max-w-lg mx-auto min-h-[100vh] mt-[100px]">
                    <textarea
                        ref={textAreaRef}
                        rows={1}
                        onChange={(e) => setValue(e.target.value)}
                        name="doc-text"
                        id="doc-text"
                        className="hide-scrollbar w-full h-auto font-normal outline-none border-none focus-visible:outline-none resize-none"
                        autoFocus
                    ></textarea>
                </div>
            </div>
        </main>
    );
};

export default Document;
