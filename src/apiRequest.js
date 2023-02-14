import axios from "axios";

export default function apiRequest(url, method, data) {
  return data
    ? axios({
        url: `https://us-central1-js04-b4877.cloudfunctions.net/tasks${
          url || ""
        }`,
        method: method || "GET",
        data: data
      })
    : axios({
        url: `https://us-central1-js04-b4877.cloudfunctions.net/tasks${
          url || ""
        }`,
        method: method || "GET"
      });
}
