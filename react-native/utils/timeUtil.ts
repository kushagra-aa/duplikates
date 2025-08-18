// time is a ISOString to '09 July' format Date
export const getPostDate = (ISOString: string): string => {
  // Create a Date object from the ISO string
  const date = new Date(ISOString);

  // Define options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit", // Two digits for the day (e.g., '09')
    month: "short", // Abbreviated month name (e.g., 'Jul' in English)
    year: "numeric", // Full year (e.g., '2023')
  };

  // Format the date using toLocaleDateString with specified options
  const formattedDate = date.toLocaleDateString("en-GB", options);

  return formattedDate;
};
