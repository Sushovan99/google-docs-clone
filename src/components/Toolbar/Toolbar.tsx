import React, { useState } from "react";
import IconButton from "../Buttons/IconButton";
import TextButton from "../Buttons/TextButton";
import NumberInput from "../Input/NumberInput";
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
} from "@/components/Icons";

interface SeparatorProps {
    margin?: string;
}

const VerticalSeparator: React.FunctionComponent<SeparatorProps> = ({
    margin = "",
}) => {
    return (
        <span className={`w-[1px] h-[20px] bg-gray-400/50 ${margin}`}></span>
    );
};

const Toolbar: React.FunctionComponent = () => {
    const [fontSize, setFontSize] = useState<string>("12");

    return (
        <div
            className="flex items-center bg-[#EDF2FA] ml-4 rounded-3xl px-3 py-1"
            style={{
                width: "calc(100vw - 85px)",
            }}
        >
            <IconButton
                radius="rounded-md"
                label={"Undo"}
                padding="px-[6px] py-[7px]"
            >
                <UndoIcon fill="var(--icon-color)" height="20px" width="20px" />
            </IconButton>

            <IconButton
                radius="rounded-md"
                label={"Redo"}
                padding="px-[6px] py-[7px]"
            >
                <RedoIcon fill="var(--icon-color)" height="20px" width="20px" />
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
                    handler={() => setFontSize((prev) => `${Number(prev) - 1}`)}
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
                    handler={() => setFontSize((prev) => `${Number(prev) + 1}`)}
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

                <IconButton label={"Highligh color"} radius={"rounded-md"}>
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
                    <AddCommentIcon fill="#ADB1B6" height="20" width="20" />
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
                        <AlignLeft fill="black" height="18" width="18" />
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

                <IconButton label={"Decrease indent"} radius={"rounded-md"}>
                    <DecreaseIndent
                        fill="var(--icon-color)"
                        height="20"
                        width="20"
                    />
                </IconButton>

                <IconButton label={"Increase indent"} radius={"rounded-md"}>
                    <IncreaseIndent
                        fill="var(--icon-color)"
                        height="20"
                        width="20"
                    />
                </IconButton>

                <IconButton label={"Format clear"} radius={"rounded-md"}>
                    <FormatClear
                        fill="var(--icon-color)"
                        height="20"
                        width="20"
                    />
                </IconButton>
            </div>
        </div>
    );
};

export default Toolbar;