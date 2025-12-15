import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyCalendar = ({ date, setDate }) => {
  return (
    <div className="my-4 text-center">
      <h2 className="text-xl font-bold mb-2">Select a Date</h2>

      <DatePicker
        selected={date}
        onChange={(newDate) => setDate(newDate)}
        dateFormat="yyyy-MM-dd"
        className="border rounded-lg shadow-md p-2"
      />
    </div>
  );
};

export default MyCalendar;
