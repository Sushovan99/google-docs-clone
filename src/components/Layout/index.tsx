import React, { useState } from "react";
import { KeyBoardArrowLeft } from "@/components/Icons";
import Iconbutton from "@/components/Buttons/IconButton";
import Document from "../Document";
import mapIcon from "@/assets/png/maps.png";
import calenderIcon from "@/assets/png/calendar.png";
import keepIcon from "@/assets/png/keep.png";
import taskIcon from "@/assets/png/tasks.png";
import contactsIcon from "@/assets/png/contacts.png";
import addIcon from "@/assets/png/gm_add.png";

const Layout: React.FunctionComponent = () => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const [showToolTip, setShowToolTip] = useState(false);
    return (
        <div className="flex relative">
            <div className="flex flex-col w-full">
                <Document />
            </div>

            {isSidePanelOpen && (
                <div
                    className={`flex flex-col items-center gap-4 w-[50px] mt-4 p-1`}
                >
                    <Iconbutton
                        label={"Calendar"}
                        radius={"rounded-full"}
                        padding="p-3"
                        right="0"
                    >
                        <img
                            src={calenderIcon}
                            alt="calendar"
                            className="object-cover object-center aspect-square h-5"
                        />
                    </Iconbutton>

                    <Iconbutton
                        label={"Keep"}
                        radius={"rounded-full"}
                        padding="p-3"
                        right="0"
                    >
                        <img
                            src={keepIcon}
                            alt="calendar"
                            className="object-cover object-center aspect-square h-5"
                        />
                    </Iconbutton>

                    <Iconbutton
                        label={"Tasks"}
                        radius={"rounded-full"}
                        padding="p-3"
                    >
                        <img
                            src={taskIcon}
                            alt="calendar"
                            className="object-cover object-center aspect-square h-5"
                        />
                    </Iconbutton>

                    <Iconbutton
                        label={"Contacts"}
                        radius={"rounded-full"}
                        right="0"
                        padding="p-3"
                    >
                        <img
                            src={contactsIcon}
                            alt="calendar"
                            className="object-cover object-center aspect-square h-5"
                        />
                    </Iconbutton>

                    <Iconbutton
                        label={"Maps"}
                        radius={"rounded-full"}
                        padding="p-3"
                    >
                        <img
                            src={mapIcon}
                            alt="calendar"
                            className="object-cover object-center aspect-square h-5"
                        />
                    </Iconbutton>

                    <span className="h-[1px] w-5 bg-gray-300"></span>

                    <Iconbutton
                        label={"Get Add-ons"}
                        radius={"rounded-full"}
                        right="0"
                        padding="p-3"
                    >
                        <img
                            src={addIcon}
                            alt="calendar"
                            className="object-cover object-center aspect-square h-5"
                        />
                    </Iconbutton>
                </div>
            )}

            <button
                className={`fixed ${
                    isSidePanelOpen ? "right-1" : "-right-3 hover:right-0"
                } bottom-5 bg-gray-200/80 flex items-center justify-center h-10 w-10`}
                onClick={() => {
                    setIsSidePanelOpen((prev) => !prev);
                    setShowToolTip(false);
                }}
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => setShowToolTip(false)}
                style={{
                    transition: "all .3s ease",
                    borderTopRightRadius: `${!isSidePanelOpen ? "0px" : "50%"}`,
                    borderBottomRightRadius: `${
                        !isSidePanelOpen ? "0px" : "50%"
                    }`,
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%",
                }}
            >
                <div className="relative">
                    <span
                        className={`${
                            isSidePanelOpen ? "rotate-180" : "rotate-0"
                        } transition-transform duration-300`}
                    >
                        <KeyBoardArrowLeft fill="var(--icon-color)" />
                    </span>
                    {showToolTip ? (
                        <span
                            className={`absolute top-[108%] right-0 text-white z-10 bg-black rounded-[4px] py-1 px-2 min-w-max text-xs break-normal`}
                        >
                            {isSidePanelOpen ? "Hide panel" : "Show panel"}
                        </span>
                    ) : null}
                </div>
            </button>
        </div>
    );
};

export default Layout;
