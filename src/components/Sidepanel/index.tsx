import React from "react";
import IconButton from "@/components/Buttons/IconButton";
import mapIcon from "@/assets/png/maps.png";
import calenderIcon from "@/assets/png/calendar.png";
import keepIcon from "@/assets/png/keep.png";
import taskIcon from "@/assets/png/tasks.png";
import contactsIcon from "@/assets/png/contacts.png";
import addIcon from "@/assets/png/gm_add.png";

const SidePanel: React.FunctionComponent = () => {
    return (
        <div
            className={`absolute top-0 right-0 flex flex-col items-center gap-4 w-[50px] p-1 bg-[#F5F7F9]`}
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

            <IconButton label={"Tasks"} radius={"rounded-full"} padding="p-3">
                <img
                    src={taskIcon}
                    alt="calendar"
                    className="object-cover object-center aspect-square h-5"
                />
            </IconButton>

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

            <IconButton label={"Maps"} radius={"rounded-full"} padding="p-3">
                <img
                    src={mapIcon}
                    alt="calendar"
                    className="object-cover object-center aspect-square h-5"
                />
            </IconButton>

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
