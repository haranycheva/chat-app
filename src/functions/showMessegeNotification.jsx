import toast from "react-hot-toast";
import MessageToast from "../components/MessageToast/MessageToast";

export const showMessegeNotification = (responseMessage, chat) => {
  toast(<MessageToast message={responseMessage} user={chat} />, {
    position: "bottom-right",
  });
};
