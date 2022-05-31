export const convertdate = (date) => {
  return `${new Date(date).toLocaleDateString("en-PH", {
    month: "long",
  })} ${new Date(date).getDay()}, ${new Date(date).getFullYear()}`;
};
