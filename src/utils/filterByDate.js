import dayjs from "dayjs";

export const filterData = (filter, date) => {
  const currentDate = dayjs();
  let startDate, endDate;

  switch (filter) {
    case "thisWeek":
      startDate = currentDate.startOf("week");
      endDate = currentDate.endOf("week");
      break;
    case "lastWeek":
      startDate = currentDate.subtract(1, "week").startOf("week");
      endDate = currentDate.subtract(1, "week").endOf("week");
      break;
    case "thisMonth":
      startDate = currentDate.startOf("month");
      endDate = currentDate.endOf("month");
      break;
    default:
      startDate = null;
      endDate = null;
      break;
  }

  const itemDate = dayjs(date);

  return itemDate.isAfter(startDate) && itemDate.isBefore(endDate);
};
