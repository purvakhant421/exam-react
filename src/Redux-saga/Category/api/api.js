import axios from "axios";
import { BASE_URL, GET_CATEGORY_API } from "../../constant";

export function getCategory() {
    return axios
      .get(BASE_URL + GET_CATEGORY_API)
      .then((res) => {
        console.log(res, "res from api");
        const data = res.data;
        const status = res.status;
        return {
          data,
          status,
        };
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }