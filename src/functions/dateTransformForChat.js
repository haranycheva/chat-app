const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  export const dateTransformForChat = (date) => {
    const dateObj = new Date(Number(date));
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${monthArr[month]} ${day}, ${year} `
  };
  