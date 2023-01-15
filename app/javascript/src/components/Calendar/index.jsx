import React, { useEffect, useRef, useState } from "react";
import { isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import Table from "components/Calendar/Table";
import PageLoader from "components/PageLoader";
import eventsApi from "apis/event";

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

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const {
        data: { events },
      } = await eventsApi.list();
      setEvents(events);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

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

  useEffect(() => {
      fetchEvents();
      getNoOfDays();
  },[]);

  useEffect(() => {
    fetchEvents();
    getNoOfDays();
  },[currentMonth]);


  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  if (either(isNil, isEmpty)(events)) {
    return (
      <Container>
        <h1 className="text-xl leading-5 text-center">
          You have no events assigned 😔
        </h1>
      </Container>
    );
  }


  return (
    <Container>
      <Table  blankDays={blankDays}
              daysInMonth={daysInMonth}
              onIncrementClick={incrementMonth}
              onDecrementClick={decrementMonth}
              currentMonth={nameMonth}
              currentYear={currentYear}
              data={events}
      />
    </Container>
  );
};
export default Calendar;