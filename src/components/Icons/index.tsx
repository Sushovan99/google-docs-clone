import React from "react";

// This file contains all the Custom icons used in this project

interface Props {
    fill: string;
    height?: string;
    width?: string;
    addClass?: string;
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
    addClass,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 96 960 960"
            width={width}
            fill={fill}
            className={addClass}
        >
            <path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z" />
        </svg>
    );
};

export const UndoIcon: React.FunctionComponent<Props> = ({
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
            <path d="M280 856v-60h289q70 0 120.5-46.5T740 634q0-69-50.5-115.5T569 472H274l114 114-42 42-186-186 186-186 42 42-114 114h294q95 0 163.5 64T800 634q0 94-68.5 158T568 856H280Z" />
        </svg>
    );
};

export const RedoIcon: React.FunctionComponent<Props> = ({
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
            <path d="M392 856q-95 0-163.5-64T160 634q0-94 68.5-158T392 412h294L572 298l42-42 186 186-186 186-42-42 114-114H391q-70 0-120.5 46.5T220 634q0 69 50.5 115.5T391 796h289v60H392Z" />
        </svg>
    );
};

export const PrintIcon: React.FunctionComponent<Props> = ({
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
            <path d="M658 408V276H302v132h-60V216h476v192h-60Zm-518 60h680-680Zm599 95q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm-81 313V684H302v192h356Zm60 60H242V760H80V514q0-45.05 30.5-75.525Q141 408 186 408h588q45.05 0 75.525 30.475Q880 468.95 880 514v246H718v176Zm102-236V513.785Q820 494 806.775 481 793.55 468 774 468H186q-19.55 0-32.775 13.225Q140 494.45 140 514v186h102v-76h476v76h102Z" />
        </svg>
    );
};

export const PaintDocIcon: React.FunctionComponent<Props> = ({
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
            <path d="M437 976q-24 0-42-17.625T377 916V716H220q-24 0-42-18t-18-42V353q0-55 39.656-96T295 216h505v440q0 24-18 42t-42 18H583v200q0 24.75-18 42.375T523 976h-86ZM220 502h520V276h-56v171h-60V276h-71v85h-60v-85H295q-32 0-53.5 23T220 353v149Zm0 154h520v-94H220v94Zm0-94v94-94Z" />
        </svg>
    );
};

export const SpellCheckIcon: React.FunctionComponent<Props> = ({
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
            <path d="M563 976 404 817l42-42 117 117 240-240 42 42-282 282ZM120 744l200-527h66l200 527h-67l-54-142H238l-54 142h-64Zm137-200h189l-92-254h-5l-92 254Z" />
        </svg>
    );
};

export const AddIcon: React.FunctionComponent<Props> = ({
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
            <path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z" />
        </svg>
    );
};

export const RemoveIcon: React.FunctionComponent<Props> = ({
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
            <path d="M200 606v-60h560v60H200Z" />
        </svg>
    );
};

export const FormatBoldIcon: React.FunctionComponent<Props> = ({
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
            <path d="M275 856V296h228q66 0 114.5 42T666 444q0 38-21 70t-56 49v6q43 14 69.5 50t26.5 81q0 68-52.5 112T510 856H275Zm86-76h144q38 0 66-25t28-63q0-37-28-62t-66-25H361v175Zm0-247h136q35 0 60.5-23t25.5-58q0-35-25.5-58.5T497 370H361v163Z" />
        </svg>
    );
};

export const FormatItalics: React.FunctionComponent<Props> = ({
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
            <path d="M224 857v-80h134l139-409H338v-80h380v80H584L445 777h159v80H224Z" />
        </svg>
    );
};

export const FormatUnderlined: React.FunctionComponent<Props> = ({
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
            <path d="M200 916v-60h560v60H200Zm280-140q-100 0-156.5-58.5T267 559V216h83v343q0 63 34 101t96 38q62 0 96-38t34-101V216h83v343q0 100-56.5 158.5T480 776Z" />
        </svg>
    );
};

export const FormatColorText: React.FunctionComponent<Props> = ({
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
            <path d="M90 1056V916h780v140H90Zm130-280 220-560h80l220 560h-75l-57-150H352l-57 150h-75Zm156-214h208L482 291h-4L376 562Z" />
        </svg>
    );
};

export const FormatInkHighLigher: React.FunctionComponent<Props> = ({
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
            <path d="M80 1056V935h800v121H80Zm501-474L466 467 284 649l115 115 182-182Zm-72-158 115 115 186-186-115-115-186 186Zm-64-21 200 200-194 194q-19 19-52.5 19T346 797l-11-11-43 43H137l120-120-4-4q-22-22-21.5-55.5T254 594l191-191Zm0 0 210-210q17-17 43-17t43 17l112 112q17 17 16.5 45.5T852 396L645 603 445 403Z" />
        </svg>
    );
};

export const InsertLinkIcon: React.FunctionComponent<Props> = ({
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
            <path d="M450 776H280q-83 0-141.5-58.5T80 576q0-83 58.5-141.5T280 376h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140 634 180.833 675q40.834 41 99.167 41h170v60ZM325 606v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820 518 779.167 477 738.333 436 680 436H510v-60h170q83 0 141.5 58.5T880 576q0 83-58.5 141.5T680 776H510Z" />
        </svg>
    );
};

export const AddCommentIcon: React.FunctionComponent<Props> = ({
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
            <path d="M450 656h60V526h130v-60H510V336h-60v130H320v60h130v130ZM80 976V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L80 976Zm60-145 75-75h605V236H140v595Zm0-595v595-595Z" />
        </svg>
    );
};

export const ImageIcon: React.FunctionComponent<Props> = ({
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
            <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm56-97h489L578 583 446 754l-93-127-117 152Zm-56 97V276v600Z" />
        </svg>
    );
};

export const AlignLeft: React.FunctionComponent<Props> = ({
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
            <path d="M120 936v-60h720v60H120Zm0-165v-60h472v60H120Zm0-165v-60h720v60H120Zm0-165v-60h472v60H120Zm0-165v-60h720v60H120Z" />
        </svg>
    );
};

export const LineSpacingIcon: React.FunctionComponent<Props> = ({
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
            <path d="M240 897 80 737l42-42 88 86V373l-88 86-42-42 160-160 160 160-42 42-88-86v408l88-86 42 42-160 160Zm240-41v-60h400v60H480Zm0-250v-60h400v60H480Zm0-250v-60h400v60H480Z" />
        </svg>
    );
};

export const BulletedListIcon: React.FunctionComponent<Props> = ({
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
            <path d="M377 858v-60h463v60H377Zm0-252v-60h463v60H377Zm0-253v-60h463v60H377ZM189 895q-28.05 0-48.025-19Q121 857 121 828.5t19.5-48q19.5-19.5 48-19.5t47.5 19.975Q255 800.95 255 829q0 27.225-19.387 46.612Q216.225 895 189 895Zm0-252q-28.05 0-48.025-19.681Q121 603.638 121 576t19.975-47.319Q160.95 509 189 509q27.225 0 46.613 19.681Q255 548.362 255 576t-19.387 47.319Q216.225 643 189 643Zm-1-253q-27.637 0-47.319-19.681Q121 350.638 121 323t19.681-47.319Q160.363 256 188 256q27.637 0 47.319 19.681Q255 295.362 255 323t-19.681 47.319Q215.637 390 188 390Z" />
        </svg>
    );
};

export const NumberedList: React.FunctionComponent<Props> = ({
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
            <path d="M120 976v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280 776v40q0 17-11.5 28.5T240 856q17 0 28.5 11.5T280 896v40q0 17-11.5 28.5T240 976H120Zm0-280V586q0-17 11.5-28.5T160 546h60v-30H120v-60h120q17 0 28.5 11.5T280 496v70q0 17-11.5 28.5T240 606h-60v30h100v60H120Zm60-280V236h-60v-60h120v240h-60Zm189 431v-60h471v60H369Zm0-243v-60h471v60H369Zm0-243v-60h471v60H369Z" />
        </svg>
    );
};

export const IncreaseIndent: React.FunctionComponent<Props> = ({
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
            <path d="M120 936v-60h720v60H120Zm0-223V437l141 136-141 140Zm0-437v-60h720v60H120Zm333 495v-60h387v60H453Zm0-165v-60h387v60H453Zm0-165v-60h387v60H453Z" />
        </svg>
    );
};

export const DecreaseIndent: React.FunctionComponent<Props> = ({
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
            <path d="M120 936v-60h720v60H120Zm333-165v-60h387v60H453Zm-188-58L124 573l141-136v276Zm188-107v-60h387v60H453Zm0-165v-60h387v60H453ZM120 276v-60h720v60H120Z" />
        </svg>
    );
};

export const FormatClear: React.FunctionComponent<Props> = ({
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
            <path d="m507 532-77-76 24-56h-79L271 296h529v100H565l-58 136Zm299 468L457 650l-88 206H260l120-282L56 250l42-42 750 750-42 42Z" />
        </svg>
    );
};

export const ArrowUpIcon: React.FunctionComponent<Props> = ({
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
            <path d="m283 699-43-43 240-240 240 240-43 43-197-197-197 197Z" />
        </svg>
    );
};

export const ArrowDownIcon: React.FunctionComponent<Props> = ({
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
            <path d="M480 712 240 472l43-43 197 197 197-197 43 43-240 240Z" />
        </svg>
    );
};

export const EditIcon: React.FunctionComponent<Props> = ({
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
            <path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
        </svg>
    );
};

export const CheckList: React.FunctionComponent<Props> = ({
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
            <path d="M222 842 80 700l42-42 100 99 179-179 42 43-221 221Zm0-320L80 380l42-42 100 99 179-179 42 43-221 221Zm298 244v-60h360v60H520Zm0-320v-60h360v60H520Z" />
        </svg>
    );
};

export const BoldBulletedList: React.FunctionComponent<Props> = ({
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
            <path d="M377 858v-60h463v60H377Zm0-252v-60h463v60H377Zm0-253v-60h463v60H377ZM189 895q-28.05 0-48.025-19Q121 857 121 828.5t19.5-48q19.5-19.5 48-19.5t47.5 19.975Q255 800.95 255 829q0 27.225-19.387 46.612Q216.225 895 189 895Zm0-252q-28.05 0-48.025-19.681Q121 603.638 121 576t19.975-47.319Q160.95 509 189 509q27.225 0 46.613 19.681Q255 548.362 255 576t-19.387 47.319Q216.225 643 189 643Zm-1-253q-27.637 0-47.319-19.681Q121 350.638 121 323t19.681-47.319Q160.363 256 188 256q27.637 0 47.319 19.681Q255 295.362 255 323t-19.681 47.319Q215.637 390 188 390Z" />
        </svg>
    );
};

export const ArrowBack: React.FunctionComponent<Props> = ({
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
            <path d="M480 909 148 576l332-332 52 52-244 244h525v73H288l244 244-52 52Z" />
        </svg>
    );
};
