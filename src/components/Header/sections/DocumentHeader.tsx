import React, { useState } from "react";
import IconButtonWithDropdown from "@/components/Buttons/IconButton";
import PillIconButton from "@/components/Buttons/PillIconButton";
import gdocsLogo from "@/assets/svg/Google_Docs_logo.svg";
import FileNameInput from "@/components/Input/FileNameInput";
import {
    StarIcon,
    CloudDoneIcon,
    DriveFileMoveIcon,
    LastEdit,
    CommentHistory,
    ArrowDropDown,
    JoinCallIcon,
    Private,
} from "@/components/Icons";
import TextButton from "@/components/Buttons/TextButton";

// Left section of Document header component consisting of File,Edit,Format etc.. options
const LeftSection: React.FunctionComponent = () => {
    const [fileName, setFileName] = useState<string>("Untitled document");

    return (
        <div className="relative shrink flex items-center gap-5">
            <picture className="shrink-0">
                <img src={gdocsLogo} alt="google-docs-logo" className="h-9" />
            </picture>

            <div className="flex flex-col items-start shrink">
                <div className="flex items-center gap-1">
                    <FileNameInput
                        label="Rename"
                        text={fileName}
                        changeName={setFileName}
                    />
                    <div className="flex gap-1">
                        <IconButtonWithDropdown
                            label={"Star"}
                            radius="rounded-full"
                        >
                            <StarIcon fill="var(--icon-color)" />
                        </IconButtonWithDropdown>

                        <IconButtonWithDropdown
                            label={"Move"}
                            radius="rounded-full"
                        >
                            <DriveFileMoveIcon fill="var(--icon-color)" />
                        </IconButtonWithDropdown>

                        <IconButtonWithDropdown
                            label={"See document status"}
                            radius="rounded-full"
                        >
                            <CloudDoneIcon fill="var(--icon-color)" />
                        </IconButtonWithDropdown>
                    </div>
                </div>

                <div className="flex mt-1">
                    <TextButton text="File" />
                    <TextButton text="Edit" />
                    <TextButton text="View" />
                    <TextButton text="Insert" />
                    <TextButton text="Format" />
                    <TextButton text="Tools" />
                    <TextButton text="Extensions" />
                    <TextButton text="Help" />
                </div>
            </div>
        </div>
    );
};

// Right section of Document header component containg Share btn, Account info btn etc..
const RightSection: React.FunctionComponent = () => {
    const [showToolTip, setShowToolTip] = useState(false);
    return (
        <div className="shrink-0 flex items-center gap-4">
            <div className="flex items-center gap-2">
                <IconButtonWithDropdown
                    label={"Last edit"}
                    radius="rounded-full"
                    padding="p-2"
                >
                    <LastEdit fill="var(--icon-color)" height="25" width="25" />
                </IconButtonWithDropdown>

                <IconButtonWithDropdown
                    label={"Open comment history"}
                    radius="rounded-full"
                    padding="p-2"
                >
                    <CommentHistory
                        fill="var(--icon-color)"
                        height="25"
                        width="25"
                    />
                </IconButtonWithDropdown>

                <IconButtonWithDropdown
                    label={"Join a call here to present this tab to the call"}
                    radius="rounded-3xl"
                    padding="px-3 py-2"
                >
                    <div className="flex items-center">
                        <span>
                            <JoinCallIcon
                                fill="var(--icon-color)"
                                height="25"
                                width="25"
                            />
                        </span>

                        <span>
                            <ArrowDropDown
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </span>
                    </div>
                </IconButtonWithDropdown>

                <PillIconButton label="Private to only me">
                    <div className="flex items-center gap-3">
                        <Private fill="black" height="18" width="18" />
                        <span className="font-[500] tracking-wide text-black/70">
                            Share
                        </span>
                    </div>
                </PillIconButton>
            </div>

            <div
                className="relative"
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => setShowToolTip(false)}
            >
                <button className="rounded-full bg-teal-600 h-10 w-10">
                    SB
                </button>

                {showToolTip && (
                    <div
                        className={`absolute top-[108%] right-0 text-white flex flex-col bg-gray-800/80 rounded-md z-20 text-xs tracking-wider w-auto p-2`}
                    >
                        <span>Google Account</span>
                        <span className="text-gray-300">Sushovan Biswas</span>
                        <span className="text-gray-300">
                            biswassushovan99@gmail.com
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

// Secondary component containing secondary formatting options
const DocumentFormattingSection: React.FunctionComponent = () => {
    return (
        <div className="flex justify-between items-start py-2 px-6 text-white bg-[#F5F7F9]">
            <LeftSection />
            <RightSection />
        </div>
    );
};

export default DocumentFormattingSection;
