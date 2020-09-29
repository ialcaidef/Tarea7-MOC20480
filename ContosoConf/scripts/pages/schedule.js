﻿// Import objects/functions from the conference namespace.
import { LocalStarStorage } from "../LocalStarStorage.js";
import { ScheduleList } from "../ScheduleList.js";

// TODO: Replace the following code by creating a ScheduleList object 
//       and calling the startDownload method.
const scheduleList = new ScheduleList(
    document.getElementById("schedule"),
     new LocalStarStorage(localStorage)
);
scheduleList.startDownload();
