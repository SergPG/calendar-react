import axios from "axios";

const list = () => axios.get("/events");

const create = payload =>
  axios.post("/events", {
  event: payload
});

const eventsApi = {
  list,
  create
};

export default eventsApi;
