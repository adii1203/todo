"use client";

import React from "react";
import { Nav } from "./nav-desktop";
import {
  Calendar,
  CalendarClock,
  CircleCheck,
  ListFilter,
  Archive,
  Inbox,
} from "lucide-react";

const DesktopNav = () => {
  return (
    <>
      <Nav
        links={[
          {
            title: "Inbox",
            label: "128",
            icon: Inbox,
            path: "inbox",
          },
          {
            title: "Today",
            label: "9",
            icon: Calendar,
            path: "today",
          },
          {
            title: "Upcoming",
            label: "",
            icon: CalendarClock,
            path: "/upcoming",
          },

          {
            title: "Filter & Labels",
            label: "",
            icon: ListFilter,
            path: "/labels",
          },
          {
            title: "Archive",
            label: "",
            icon: Archive,
            path: "/archive",
          },
          {
            title: "Completed",
            label: "23",
            icon: CircleCheck,
            path: "/completed",
          },
        ]}
      />
    </>
  );
};

export default DesktopNav;
