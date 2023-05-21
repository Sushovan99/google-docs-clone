import React from "react";
import IconButton from "@/components/Buttons/IconButton";
import mapIcon from "@/assets/png/maps.png";
import calenderIcon from "@/assets/png/calendar.png";
import keepIcon from "@/assets/png/keep.png";
import taskIcon from "@/assets/png/tasks.png";
import contactsIcon from "@/assets/png/contacts.png";
import addIcon from "@/assets/png/gm_add.png";

// Component containing all the side panel buttons like Google-calender, keep etc.
const SidePanel: React.FunctionComponent = () => {
    return (
        <div
            className={`absolute top-0 right-0 flex flex-col items-center gap-4 w-[50px] p-1 bg-[#F5F7F9]`}
        >
            <a
                href="https://calendar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton
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
                </IconButton>
            </a>

            <a
                href="https://keep.google.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton
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
                </IconButton>
            </a>

            <a
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.tasks&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton
                    label={"Tasks"}
                    radius={"rounded-full"}
                    padding="p-3"
                >
                    <img
                        src={taskIcon}
                        alt="calendar"
                        className="object-cover object-center aspect-square h-5"
                    />
                </IconButton>
            </a>

            <a
                href="https://contacts.google.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton
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
                </IconButton>
            </a>

            <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconButton
                    label={"Maps"}
                    radius={"rounded-full"}
                    padding="p-3"
                >
                    <img
                        src={mapIcon}
                        alt="calendar"
                        className="object-cover object-center aspect-square h-5"
                    />
                </IconButton>
            </a>

            <span className="h-[1px] w-5 bg-gray-300"></span>

            <IconButton
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
            </IconButton>
        </div>
    );
};

export default SidePanel;
