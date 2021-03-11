import axios from "axios";
const baseUrl = "https://www.anapioficeandfire.com/api/books?pageSize=30";
var cors_proxy = require("cors-anywhere");

const getAll = () => {
  const req = axios.get(baseUrl);
  return req
    .then((res) => {
      //console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { getAll };
