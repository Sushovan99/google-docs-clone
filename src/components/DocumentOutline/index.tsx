import React, { useState, useRef } from "react";
import IconButton from "../Buttons/IconButton";
import { BoldBulletedList, ArrowBack, AddIcon } from "../Icons";
import { useClickOutside } from "@/hooks/customHooks/useClickOutside";

interface Props {
    showOutline: boolean;
    setShowOutline: React.Dispatch<React.SetStateAction<boolean>>;
}

// Component for showing document outline & summary on the top left side
const DocumentsOutline: React.FunctionComponent<Props> = ({
    showOutline,
    setShowOutline,
}) => {
    const [showTextArea, setShowTextArea] = useState(false);
    const textAreaRef = useRef(null);

    useClickOutside(textAreaRef, () => setShowTextArea(false));

    return (
        <React.Fragment>
            <IconButton
                label="Show documents outline"
                radius="rounded-full"
                padding="p-2"
                left="0"
                addClass={
                    showOutline
                        ? "-translate-x-[200px] select-none pointer-events-none"
                        : "translate-x-0"
                }
                handler={() => setShowOutline((prev) => !prev)}
            >
                <BoldBulletedList
                    fill="var(--icon-color)"
                    height="26"
                    width="26"
                />
            </IconButton>

            <div
                className={`transition-transform -translate-y-[44px] max-w-[250px] ${
                    showOutline
                        ? "translate-x-0"
                        : "-translate-x-[300px] select-none pointer-events-none"
                }`}
            >
                <div className="mb-4">
                    <IconButton
                        radius="rounded-full"
                        label="Close document outline"
                        padding="p-2"
                        left="0"
                        handler={() => setShowOutline((prev) => !prev)}
                    >
                        <ArrowBack
                            fill="var(--icon-color)"
                            height="24"
                            width="24"
                        />
                    </IconButton>
                </div>

                <div className="translate-x-[10px]">
                    <div className="flex flex-col pb-3 border-b border-black/20">
                        <div className="flex items-center justify-between">
                            <span
                                className={`text-xs ${
                                    showTextArea ? "text-blue-500" : ""
                                }`}
                            >
                                Summary
                            </span>

                            {!showTextArea && (
                                <IconButton
                                    label="Add summary"
                                    radius="rounded-full"
                                    padding="p-[6px]"
                                    handler={() => {
                                        setShowTextArea(true);
                                    }}
                                >
                                    <AddIcon fill="black" />
                                </IconButton>
                            )}
                        </div>

                        {showTextArea && (
                            <textarea
                                ref={textAreaRef}
                                autoFocus
                                placeholder="Enter your document summary here"
                                className="mb-2 mt-1 text-[15px] w-full p-2 resize-none bg-transparent focus-visible:outline-2 focus-visible:outline-blue-500"
                            />
                        )}
                    </div>

                    <div className="mt-8 flex flex-col">
                        <span className="text-xs">Outline</span>
                        <em className="text-[13px] mt-5">
                            Heading you add to the document will appear here.
                        </em>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DocumentsOutline;
