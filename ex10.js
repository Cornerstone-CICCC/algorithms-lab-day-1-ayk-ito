// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  // your code here
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = "";
  let monthEn = "";
  let formatDate = "";

  month = dateStr.substr(5, 2);
  monthEn = months[month - 1];
  formatDate = monthEn + " " + dateStr.substr(8, 2) + ", " + dateStr.substr(0, 4);
  return formatDate;
}

console.log(formatDate("2022-01-01")); // 'January 1, 2022'
