import React, { useEffect, useRef, useState } from "react";

import TableNavigate from "./TableNavigate";
import TableDaysWeek from "./TableDaysWeek";
import TableDatesMonth from "./TableDatesMonth";

const Table = ({blankDays, daysInMonth, onIncrementClick, onDecrementClick, currentMonth, currentYear }) => {

  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
      <main className="w-full flex-grow p-6">
        <h1 className="text-3xl text-black pb-6">Calendar</h1>

        <div className="w-full">
          <div className="antialiased sans-serif bg-gray-100">

            <div>
              <div className="container py-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                     <TableNavigate
                       onIncrementClick={onIncrementClick}
                       onDecrementClick={onDecrementClick}
                       currentMonth={currentMonth}
                       currentYear={currentYear}
                     />
                  <div className="-mx-1 -mb-1">
                    <TableDaysWeek />
                    <TableDatesMonth blankDays={blankDays} daysInMonth={daysInMonth} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};
export default Table;