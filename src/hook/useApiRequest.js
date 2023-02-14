import { useEffect, useState } from "react";
import apiRequest from "../apiRequest";

const useApiRequest = () => {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    apiRequest().then((response) => setTasks(response?.data?.data));
  }, []);

  return tasks;
};

export default useApiRequest;
