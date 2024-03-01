import React from "react";

function Calendar() {
  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const today = currentDate.getDate();

  // Get the first day of the month and total days in the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate days of the month
  const daysInMonth = [];
  for (let i = 1; i <= totalDaysInMonth; i++) {
    daysInMonth.push(i);
  }

  // Generate empty slots for days before the first day of the month
  const emptySlots = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptySlots.push(i);
  }

  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl overflow-hidden p-8 m-5 border border-gray-800">
        {/* Month and Year Header */}
        <div className=" py-2 pl-2 text-2xl font-bold">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </div>

        {/* Days of the Week Header */}
        <div className="grid grid-cols-7 text-center font-semibold text-xl">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Days of the Month */}
        <div className="grid grid-cols-7 gap-1 p-2">
          {/* Render empty slots */}
          {emptySlots.map((slot, index) => (
            <div key={index}></div>
          ))}
          {/* Render days of the month */}
          {daysInMonth.map((day, index) => (
            <div
              key={index}
              className={`p-2 text-center ${
                day === today ? "bg-blue-500 text-white rounded-full" : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
