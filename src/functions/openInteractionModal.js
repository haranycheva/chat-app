export const openInteractionModal = (componentType, setModalName) => {
  switch (componentType) {
    case "message":
      setModalName("message");
      return
    case "chat":
      setModalName("chat");
    default:
      break;
  }
};
