import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="my-6 text-center">
      <h2 className="text-xl font-semibold mb-3">Select a Date</h2>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="border px-4 py-2 rounded-lg text-center"
      />

      <p className="mt-3 text-sm text-gray-600">
        Selected Date: {selectedDate.toDateString()}
      </p>
    </div>
  );
};

export default MyCalendar;
