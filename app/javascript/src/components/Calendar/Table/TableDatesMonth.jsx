import React from "react";
import PropTypes from "prop-types";




const  TableDatesMonth = ({blankDays, daysInMonth, data}) => {

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
              <div
                className="overflow-y-auto mt-1"
                style={{ height: 80 }} >

                {
                  data.map(eventData => (
                  <div
                    key={ eventData.id }
                    className="px-2 py-1 rounded-lg mt-1 overflow-hidden border
                               border-green-200 text-green-800 bg-green-100">
                    <p className="text-sm truncate leading-tight">
                      {eventData.title}
                    </p>
                  </div>
                  ))
                }

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