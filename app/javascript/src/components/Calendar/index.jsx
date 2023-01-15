import React, { useEffect, useRef, useState } from "react";

import Container from "components/Container";
import Table from "components/Calendar/Table";

const Calendar = () => {

  const MONTH_NAMES = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const newDate = useRef(new Date());

  const [today, setToday] = useState(newDate.current.getDate());
  const [currentMonth, setCurrentMonth] = useState(newDate.current.getMonth());
  const [currentYear, setCurrentYear] = useState(newDate.current.getFullYear());

  const [nameMonth, setNameMonth] = useState('')

  const [blankDays, setBlankDays] = useState([] );
  const [daysInMonth, setDaysInMonth] = useState([]);

  // setInterval(() => {
  //   newDate.current = new Date();
  //   setToday(newDate.current.getDate());
  //   setCurrentMonth(newDate.current.getMonth());
  //   setCurrentYear(newDate.current.getFullYear());
  // }, 1000);

  const incrementMonth = () => {
    newDate.current.setMonth(currentMonth + 1);
    setCurrentMonth(newDate.current.getMonth());
    setCurrentYear(newDate.current.getFullYear());
  }

  const decrementMonth = () => {
    newDate.current.setMonth(currentMonth - 1);
    setCurrentMonth(newDate.current.getMonth());
    setCurrentYear(newDate.current.getFullYear());
  }

  const getNoOfDays = () => {
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let dayOfWeek = new Date(currentYear, currentMonth).getDay();

    let blankDaysArray = [];
    for ( let i=1; i <= dayOfWeek; i++) {
      blankDaysArray.push(i);
    }

    let daysArray = [];
    for ( let i=1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setNameMonth(MONTH_NAMES[currentMonth])
    setBlankDays(blankDaysArray);
    setDaysInMonth(daysArray);
  }

  // const nowTime = `${today} : ${currentMonth} : ${currentYear}   = ${blankDays}+ ${daysInMonth}`;

  useEffect(() => {
      getNoOfDays();
  },[]);

  useEffect(() => {
    getNoOfDays();
  },[currentMonth]);


  return (
    <Container>
      <Table  blankDays={blankDays}
              daysInMonth={daysInMonth}
              onIncrementClick={incrementMonth}
              onDecrementClick={decrementMonth}
              currentMonth={nameMonth}
              currentYear={currentYear}
      />
    </Container>
  );
};
export default Calendar;