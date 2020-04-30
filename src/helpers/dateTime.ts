import moment from "moment";
import format from "date-fns/format";
import isBefore from "date-fns/isBefore";

export function formatDateTime(date: string): string {
  const currentDate = new Date();
  const mailDate = new Date(date);
  const mailYear = mailDate.getFullYear();
  const currentYear = currentDate.getFullYear();
  const isSameYear = currentYear == mailYear;

  if (mailYear < currentYear) {
    return format(mailDate, "yyyy/MM/dd");
  } else if (isSameYear && isBefore(mailDate, currentDate)) {
    return format(mailDate, "MMM dd");
  }

  return format(mailDate, "H:mm");
}

export function isBetween(
  date: string,
  start: Date | number,
  end: Date | number
): boolean {
  return moment(date).isBetween(start, end, undefined, "[]");
}
