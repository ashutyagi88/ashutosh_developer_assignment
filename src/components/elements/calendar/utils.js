import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
  let year = dayjs().year();
  let firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonth = 0 - firstDayOfMonth;

  let daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonth++;
      return dayjs(new Date(year, month, currentMonth));
    });
  });
  return daysMatrix;
};
