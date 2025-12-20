import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyCalendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="my-6 text-center bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg border p-4 rounded-xl shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-3">Select a Date</h2>

      <DatePicker
        selected={selectedDate}
        onChange={setSelectedDate}
        dateFormat="dd/MM/yyyy"
        className="px-4 py-2 rounded-lg text-center backdrop-blur-md border shadow-md bg-white/20 dark:bg-gray-700/50 text-black dark:text-white"
      />

      {selectedDate && (
        <p className="mt-3 text-sm text-white">
          Selected Date: {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
};

export default MyCalendar;
