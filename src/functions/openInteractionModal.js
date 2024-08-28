export const openInteractionModal = (e, id, componentType, setModalName) => {
  e.preventDefault();
  switch (componentType) {
    case "message":
      setModalName("interactionMessage", id);
      return
    case "chat":
      setModalName("interactionChat", id);
    default:
      break;
  }
};
