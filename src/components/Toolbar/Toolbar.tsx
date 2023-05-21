import React, { Dispatch, SetStateAction, useState } from "react";
import IconButton from "../Buttons/IconButton";
import TextButton from "../Buttons/TextButton";
import NumberInput from "../Input/NumberInput";
import SidePanel from "../Sidepanel";
import { useAppSelector } from "@/store/hooks";

import {
    UndoIcon,
    RedoIcon,
    PrintIcon,
    PaintDocIcon,
    SpellCheckIcon,
    ArrowDropDown,
    AddIcon,
    RemoveIcon,
    FormatBoldIcon,
    FormatItalics,
    FormatUnderlined,
    FormatColorText,
    FormatInkHighLigher,
    InsertLinkIcon,
    AddCommentIcon,
    ImageIcon,
    AlignLeft,
    LineSpacingIcon,
    BulletedListIcon,
    NumberedList,
    IncreaseIndent,
    DecreaseIndent,
    FormatClear,
    // ArrowDownIcon,
    ArrowUpIcon,
    EditIcon,
    CheckList,
    // BoldBulletedList,
} from "@/components/Icons";
import PillIconButton from "../Buttons/PillIconButton";
import DocumentsOutline from "../DocumentOutline";

interface SeparatorProps {
    margin?: string;
}

interface ToolbarProps {
    setIsMenuHidden: Dispatch<SetStateAction<boolean>>;
}

// Separtor component
const VerticalSeparator: React.FunctionComponent<SeparatorProps> = ({
    margin = "",
}) => {
    return (
        <span className={`w-[1px] h-[20px] bg-gray-400/50 ${margin}`}></span>
    );
};

// Components containing all the primary text formatting options like changing font-size, weight etc..
const Toolbar: React.FunctionComponent<ToolbarProps> = ({
    setIsMenuHidden,
}) => {
    const [fontSize, setFontSize] = useState<string>("12");
    const [showDocumentsOutline, setShowDocumentsOutline] = useState(false);
    const isSidePanelOpen = useAppSelector(
        (state) => state.sidpepanel.isSidePanelOpen
    );

    return (
        <div className="flex items-start relative bg-[#F5F7F9]">
            <div
                style={{
                    width: isSidePanelOpen ? "calc(100vw - 85px)" : "100%",
                }}
                className="relative flex items-center justify-between bg-[#EDF2FA] mx-4 rounded-3xl px-3 py-1 w-full"
            >
                {/* Left side toolbar group */}
                <div className="flex items-center">
                    <IconButton
                        radius="rounded-md"
                        label={"Undo"}
                        padding="px-[6px] py-[7px]"
                    >
                        <UndoIcon
                            fill="var(--icon-color)"
                            height="20px"
                            width="20px"
                        />
                    </IconButton>

                    <IconButton
                        radius="rounded-md"
                        label={"Redo"}
                        padding="px-[6px] py-[7px]"
                    >
                        <RedoIcon
                            fill="var(--icon-color)"
                            height="20px"
                            width="20px"
                        />
                    </IconButton>

                    <IconButton
                        radius="rounded-md"
                        label={"Print"}
                        padding="px-[6px] py-[7px]"
                    >
                        <PrintIcon
                            fill="var(--icon-color)"
                            height="20px"
                            width="20px"
                        />
                    </IconButton>

                    <IconButton
                        radius="rounded-md"
                        label={"Paint format"}
                        padding="px-[6px] py-[7px]"
                    >
                        <SpellCheckIcon
                            fill="var(--icon-color)"
                            height="20px"
                            width="20px"
                        />
                    </IconButton>

                    <IconButton
                        radius="rounded-md"
                        label={"Paint format"}
                        padding="px-[6px] py-[7px]"
                    >
                        <PaintDocIcon
                            fill="var(--icon-color)"
                            height="20px"
                            width="20px"
                        />
                    </IconButton>

                    <TextButton
                        text="100%"
                        padding="py-[5px] px-[9px] pr-[2px]"
                        label="Zoom"
                        endIcon
                    >
                        <ArrowDropDown fill="var(--icon-color)" />
                    </TextButton>

                    <VerticalSeparator margin="mx-1" />

                    <TextButton
                        text="Normal Text"
                        padding="py-[5px] px-[9px] pr-[2px]"
                        label="Styles"
                        endIcon
                    >
                        <ArrowDropDown fill="var(--icon-color)" />
                    </TextButton>

                    <VerticalSeparator margin="mx-1" />

                    <TextButton
                        text="Nunito"
                        padding="py-[5px] px-[9px] pr-[2px]"
                        label="Font"
                        endIcon
                    >
                        <ArrowDropDown fill="var(--icon-color)" />
                    </TextButton>

                    <VerticalSeparator margin="mx-1" />

                    <div className="flex items-center">
                        <IconButton
                            label={"Decrease font size"}
                            radius={"rounded-md"}
                            handler={() =>
                                setFontSize((prev) => `${Number(prev) - 1}`)
                            }
                        >
                            <RemoveIcon fill="var(--icon-color)" />
                        </IconButton>

                        <div>
                            <NumberInput
                                fontSize={fontSize}
                                changeFontSize={setFontSize}
                                label="Font size"
                            />
                        </div>

                        <IconButton
                            label={"Increase font size"}
                            radius={"rounded-md"}
                            handler={() =>
                                setFontSize((prev) => `${Number(prev) + 1}`)
                            }
                        >
                            <AddIcon fill="var(--icon-color)" />
                        </IconButton>
                    </div>

                    <VerticalSeparator margin="mx-1" />

                    <div className="flex items-center gap-1">
                        <IconButton label={"Bold"} radius={"rounded-md"}>
                            <FormatBoldIcon
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton label={"Italic"} radius={"rounded-md"}>
                            <FormatItalics
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton label={"Underline"} radius={"rounded-md"}>
                            <FormatUnderlined
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton label={"Text color"} radius={"rounded-md"}>
                            <FormatColorText
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton
                            label={"Highligh color"}
                            radius={"rounded-md"}
                        >
                            <FormatInkHighLigher
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>
                    </div>

                    <VerticalSeparator margin="mx-1" />

                    <div className="flex gap-2 items-center">
                        <IconButton label={"Insert link"} radius={"rounded-md"}>
                            <InsertLinkIcon
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton label={"Add comment"} radius={"rounded-md"}>
                            <AddCommentIcon
                                fill="#ADB1B6"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton label={"Add comment"} radius={"rounded-md"}>
                            <ImageIcon
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>
                    </div>

                    <VerticalSeparator margin="mx-1" />

                    <div className="flex gap-2 items-center">
                        <IconButton
                            label={"Align"}
                            radius={"rounded-md"}
                            padding="px-1 py-[5px] pr-4"
                        >
                            <div className="relative">
                                <AlignLeft
                                    fill="black"
                                    height="18"
                                    width="18"
                                />
                                <span className="absolute top-0 -right-4">
                                    <ArrowDropDown
                                        fill="black"
                                        height="16"
                                        width="16"
                                    />
                                </span>
                            </div>
                        </IconButton>

                        <IconButton
                            label={"Line & paragraph spacing"}
                            radius={"rounded-md"}
                        >
                            <LineSpacingIcon
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton
                            label={"Line & paragraph spacing"}
                            radius={"rounded-md"}
                        >
                            <CheckList
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton
                            label={"Bulleted list"}
                            radius={"rounded-md"}
                            padding="px-1 py-[5px] pr-4"
                        >
                            <div className="relative">
                                <BulletedListIcon
                                    fill="var(--icon-color)"
                                    height="20"
                                    width="20"
                                />
                                <span className="absolute top-0 -right-4">
                                    <ArrowDropDown
                                        fill="black"
                                        height="16"
                                        width="16"
                                    />
                                </span>
                            </div>
                        </IconButton>

                        <IconButton
                            label={"Numbered list"}
                            radius={"rounded-md"}
                            padding="px-1 py-[5px] pr-4"
                        >
                            <div className="relative">
                                <NumberedList
                                    fill="var(--icon-color)"
                                    height="20"
                                    width="20"
                                />
                                <span className="absolute top-0 -right-4">
                                    <ArrowDropDown
                                        fill="black"
                                        height="16"
                                        width="16"
                                    />
                                </span>
                            </div>
                        </IconButton>

                        <IconButton
                            label={"Decrease indent"}
                            radius={"rounded-md"}
                        >
                            <DecreaseIndent
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton
                            label={"Increase indent"}
                            radius={"rounded-md"}
                        >
                            <IncreaseIndent
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>

                        <IconButton
                            label={"Format clear"}
                            radius={"rounded-md"}
                        >
                            <FormatClear
                                fill="var(--icon-color)"
                                height="20"
                                width="20"
                            />
                        </IconButton>
                    </div>
                </div>

                {/* Right side toolbar group */}
                <div className="flex items-center bg-[#F5F7F9]`">
                    <div className="mr-2">
                        <PillIconButton
                            label="Editing mode"
                            bg="bg-transparent"
                            padding="py-[5px] px-3"
                            hoverBg="hover:bg-gray-300/50"
                            activeBg="active:bg-gray-300/70"
                        >
                            <div className="flex items-center gap-3">
                                <EditIcon fill="black" height="18" width="18" />
                                <span className="font-[500] mr-4 text-sm tracking-wide text-black/70">
                                    Editing
                                </span>

                                <ArrowDropDown fill="black" />
                            </div>
                        </PillIconButton>
                    </div>

                    <VerticalSeparator />

                    <div className="ml-1">
                        <IconButton
                            label="Hide the menus"
                            radius="rounded-md"
                            padding="px-2 py-2"
                            right="0"
                            handler={() => setIsMenuHidden((prev) => !prev)}
                        >
                            <ArrowUpIcon fill="black" />
                        </IconButton>
                    </div>
                </div>

                <div className="absolute top-[115%] left-0">
                    <DocumentsOutline
                        showOutline={showDocumentsOutline}
                        setShowOutline={setShowDocumentsOutline}
                    />
                </div>
            </div>

            {/* Conditionally showing side-panel using the bottom-right floating button */}
            {isSidePanelOpen ? <SidePanel /> : null}
        </div>
    );
};

export default Toolbar;
