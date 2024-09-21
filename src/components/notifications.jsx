import ContestData from "./data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function Notification({ item, isLogin }) {
  if (isLogin) {
    const now = new Date();
    const contestStart = new Date(item.start);
    const timeUntilContest = contestStart - now;
    const notificationTime = 10000;
    // const notificationTime = Math.max(timeUntilContest - 1800000, 0); // 30 minutes before contest, or immediately if less than 30 minutes

    const notificationData = {
      userId: localStorage.getItem("token") || sessionStorage.getItem("token"),
      message: `Reminder: "${item.event}" contest on ${
        ContestData.platformNames[item.resource]
      } starts soon!`,
      time: notificationTime,
    };

    try {
      const response = await fetch("http://localhost:8080/api/notifyUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notificationData),
      });
      const data = await response.json();
      console.log(data);
      if (data.err === "Register on telegram first") {
        toast("you have to registor on our telegram bot {codeArena_bot} first");
      } else if (response.ok) {
        toast("Notification set successfully!");
      } else {
        const errorData = await response.json();
        toast(
          `Failed to set notification: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error setting notification:", error);
      toast(
        "An error occurred while setting the notification. Please try again."
      );
    }
  } else {
    toast("you have to log in first for this feature");
  }
}


export default Notification;
