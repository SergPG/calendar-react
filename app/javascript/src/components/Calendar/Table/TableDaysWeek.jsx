import React from "react";


const TableDaysWeek = ({ data }) => {

  const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="flex flex-wrap"
         style={{ marginBottom: -40 }}
    >

      {
        daysName.map(maneDay => (
          <div className="px-2 py-2"
               style={{ width: '14.26%' }}
               key={maneDay}>
            <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center"> {maneDay} </div>
          </div>
        ))
      }

    </div>
  );
};

export default TableDaysWeek;