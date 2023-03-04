import { useEffect, useState } from "react";
import "./calendar.css";

// Days of week and months for displaying the data
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

const Calendar = ({ date }) => {
  // state for rendeing days of calender
  const [currentDays, setCurrentDays] = useState([]);

  // side effect to render days whenever given date 'prop' changes
  useEffect(() => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    let newCurrentDays = [];

    for (let day = 0; day < 42; day++) {
      if (day === 0 && weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
      } else if (day === 0) {
        firstDayOfMonth.setDate(
          firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
        );
      } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
      }

      let calendarDay = {
        currentMonth: firstDayOfMonth.getMonth() === date.getMonth(),
        date: new Date(firstDayOfMonth),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected: firstDayOfMonth.toDateString() === date.toDateString(),
        year: firstDayOfMonth.getFullYear(),
      };

      newCurrentDays.push(calendarDay);
    }
    setCurrentDays(newCurrentDays);
  }, [date]);

  return (
    <div className="calendar" id="calendar">
      <div className="calendar-header">
        <div className="title">
          <h2>
            {months[date.getMonth()]} {date.getFullYear()}
          </h2>
        </div>
      </div>
      <div className="calendar-body">
        <div className="table-header">
          {weekdays.map((weekday) => {
            return (
              <div className="weekday">
                <p>{weekday}</p>
              </div>
            );
          })}
        </div>
        <div className="table-content">
          {currentDays.map((day) => {
            return (
              <div
                className={
                  "calendar-day current" + (day.selected ? " selected" : "")
                }
              >
                <p>{day.number}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
