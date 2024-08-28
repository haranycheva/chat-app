
export const dateTransformForMessage = (date) => {
  const dateObj = new Date(Number(date));
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours() % 12 || 12;
  const minutes = getMinutes(dateObj);
  const ampm = getAmPm(dateObj)
  return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
};

function getMinutes(date) {
  return date.getMinutes().toString().padStart(2,  "0");
}

function getAmPm(date) {
  return date.getHours() <= 12 ? "AM" : "PM";
}
