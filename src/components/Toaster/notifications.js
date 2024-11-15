import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { platformNames } from "../../constants";
import { setNotification } from "../../api/contest";

async function Notification({ item, isLogin }) {
  if (isLogin) {
    // const now = new Date();
    // const contestStart = new Date(item.start);
    // const timeUntilContest = contestStart - now;
    const notificationTime = 10000; // testing 10 seconds
    // const notificationTime = Math.max(timeUntilContest - 1800000, 0); // 30 minutes before contest, or immediately if less than 30 minutes
    const notificationData = {
      message: `Reminder: '${item.event}' contest on ${
        platformNames[item.resource]
      } starts soon!`,
      time: notificationTime,
    };

    try {
      const response = await setNotification(localStorage.getItem("userId"), notificationData);
      console.log(response)
      if (response.message === "Telegram username not found") {
        toast("you have to registor on our telegram bot {ContestCalenderBot} first");
      } else if (response.message === "Notification set successfully") {
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
