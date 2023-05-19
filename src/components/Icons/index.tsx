import React from "react";

// This file contains all the Custom icons

interface Props {
    fill: string;
    height?: string;
    width?: string;
}

export const StarIcon: React.FunctionComponent<Props> = ({
    fill,
    height = "18",
    width = "18",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
        >
            <path d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
        </svg>
    );
};

export const CloudDoneIcon: React.FunctionComponent<Props> = ({
    fill,
    height = "18",
    width = "18",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
        >
            <path d="m412 777 230-230-40-40-189 189-100-100-41 41 140 140ZM251 896q-88 0-149.5-61.5T40 685q0-78 50-137t127-71q20-97 94-158.5T482 257q112 0 189 81.5T748 534v24q72-2 122 46.5T920 727q0 69-50 119t-119 50H251Zm0-60h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-91-61-154t-149-63q-88 0-149.5 63T267 534h-19q-62 0-105 43.5T100 685q0 63 44 107t107 44Zm229-260Z" />
        </svg>
    );
};

export const DriveFileMoveIcon: React.FunctionComponent<Props> = ({
    fill,
    height = "18",
    width = "18",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
        >
            <path d="m493 763 147-147-147-147-42 42 75 75H320v60h206l-75 75 42 42ZM141 896q-24 0-42-18.5T81 836V316q0-23 18-41.5t42-18.5h280l60 60h340q23 0 41.5 18.5T881 376v460q0 23-18.5 41.5T821 896H141Zm0-580v520h680V376H456l-60-60H141Zm0 0v520-520Z" />
        </svg>
    );
};

export const JoinCallIcon: React.FunctionComponent<Props> = ({
    fill,
    height = "18",
    width = "18",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
        >
            <path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h520q24 0 42 18t18 42v215l160-160v410L720 621v215q0 24-18 42t-42 18H140Zm0-60h520V316H140v520Zm0 0V316v520Z" />
        </svg>
    );
};

export const CommentHistory: React.FunctionComponent<Props> = ({
    fill,
    height = "18",
    width = "18",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
        >
            <path d="M240 656h480v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60Zm640 580L720 816H140q-23 0-41.5-18.5T80 756V236q0-23 18.5-41.5T140 176h680q24 0 42 18.5t18 41.5v740ZM140 236v520h605l75 75V236H140Zm0 0v595-595Z" />
        </svg>
    );
};

export const LastEdit: React.FunctionComponent<Props> = ({
    fill,
    height = "18",
    width = "18",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
        >
            <path d="M477 936q-149 0-253-105.5T120 575h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477 276q-68 0-127.5 31T246 389h105v60H142V241h60v106q52-61 123.5-96T477 216q75 0 141 28t115.5 76.5Q783 369 811.5 434T840 574q0 75-28.5 141t-78 115Q684 879 618 907.5T477 936Zm128-197L451 587V373h60v189l137 134-43 43Z" />
        </svg>
    );
};

export const Private: React.FunctionComponent<Props> = ({
    fill,
    height = "18",
    width = "18",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
        >
            <path d="M220 976q-24.75 0-42.375-17.625T160 916V482q0-24.75 17.625-42.375T220 422h70v-96q0-78.85 55.606-134.425Q401.212 136 480.106 136T614.5 191.575Q670 247.15 670 326v96h70q24.75 0 42.375 17.625T800 482v434q0 24.75-17.625 42.375T740 976H220Zm0-60h520V482H220v434Zm260.168-140Q512 776 534.5 753.969T557 701q0-30-22.668-54.5t-54.5-24.5Q448 622 425.5 646.5t-22.5 55q0 30.5 22.668 52.5t54.5 22ZM350 422h260v-96q0-54.167-37.882-92.083-37.883-37.917-92-37.917Q426 196 388 233.917 350 271.833 350 326v96ZM220 916V482v434Z" />
        </svg>
    );
};

export const ArrowDropDown: React.FunctionComponent<Props> = ({
    fill,
    height = "18",
    width = "18",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
        >
            <path d="M480 696 280 497h400L480 696Z" />
        </svg>
    );
};

export const KeyBoardArrowLeft: React.FunctionComponent<Props> = ({
    fill,
    height = "18",
    width = "18",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
        >
            <path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z" />
        </svg>
    );
};
