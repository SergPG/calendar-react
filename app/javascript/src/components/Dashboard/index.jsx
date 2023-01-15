import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";

import ContainerOLd from "components/ContainerOLd";
import Table from "components/Tasks/Table";
import PageLoader from "components/PageLoader";
import tasksApi from "apis/tasks";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const {
        data: { tasks },
      } = await tasksApi.list();
      setTasks(tasks);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  if (either(isNil, isEmpty)(tasks)) {
    return (
      <ContainerOLd>
        <h1 className="text-xl leading-5 text-center">
          You have no tasks assigned 😔
        </h1>
      </ContainerOLd>
    );
  }

  return (
    <ContainerOLd>
      <Table data={tasks} />
    </ContainerOLd>
  );
};

export default Dashboard;
