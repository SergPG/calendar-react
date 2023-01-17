import React from "react";

const TableNavigate = ({ onIncrementClick, onDecrementClick, nameMonth, currentYear }) => {
  return (
    <div className="flex items-center justify-between py-2 px-6">
      <div>
        <span  className="text-lg font-bold text-gray-800"> {nameMonth} </span>
        <span  className="ml-1 text-lg text-gray-600 font-normal"> {currentYear} </span>
      </div>
      <div
        style={{ paddingTop: 2 }}
        className="border rounded-lg px-1" >
          <button
            onClick={onDecrementClick}
            className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1">
            PREV
          </button>
        <div className="border-r inline-flex h-6"></div>
        <button
          onClick={onIncrementClick}
          className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1">
          NEXT
        </button>
      </div>
    </div>
  );
};
export default TableNavigate;
