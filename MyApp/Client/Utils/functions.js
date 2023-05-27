export const dd_dd_mm_Date = () => {
  const WeekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Months = [
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

  const DateNow = new Date();
  const WeekDay = WeekDays[DateNow.getDay()];
  const Day = DateNow.getDate();
  const Month = Months[DateNow.getMonth()];

  const DateFormat = `${WeekDay}, ${Month} ${Day} `;

  return DateFormat;
};
