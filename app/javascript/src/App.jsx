import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";

import Dashboard from "components/Dashboard";
import PageLoader from "components/PageLoader";
import Calendar from "./components/Calendar";

import CreateEvent from "components/Calendar/Create";

import Signup from "components/Authentication/Signup";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    <div className="h-screen">
      <PageLoader />
    </div>
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/about" render={() => <div>About</div>} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/events/create" component={CreateEvent} />
        <Route exact path="/signup" component={Signup} />

      </Switch>
    </Router>
  );
};

export default App;
