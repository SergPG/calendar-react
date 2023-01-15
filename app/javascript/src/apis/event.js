import axios from "axios";

const list = () => axios.get("/events");

const eventsApi = { list };

export default eventsApi;
