import React from "react";
import PropTypes from "prop-types";




const  TableDatesMonth = ({blankDays, daysInMonth}) => {

  return (
    <div className="flex flex-wrap border-t border-l">
      {
        blankDays.map(blankDay => (
          <div
            key={blankDay}
            className="text-center border-r border-b px-4 pt-2"
            style={{ width: '14.26%', height: 120 }}
          > </div>
        ))
      }
      {
        daysInMonth.map(dayInMonth => (
          <div
            key={dayInMonth}
            className="px-4 pt-2 border-r border-b relative"
            style={{ width: '14.26%', height: 120 }} >
              <div className="inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100">
                {dayInMonth}
              </div>
          </div>
        ))
      }

    </div>
  );
};

TableDatesMonth.propTypes = {
  blankDays: PropTypes.array.isRequired,
  daysInMonth: PropTypes.array.isRequired,
};

export default TableDatesMonth