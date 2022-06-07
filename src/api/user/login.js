
const axios = require("axios").default;
import urls from "../../urls";

export async function login(usrName, pass) {
  const res = axios.post(urls.Login.master, {
    username: usrName,
    password: pass,
  });
  const dataRes = await res;
  if (dataRes.data.login) {
    sessionStorage.clear();
    sessionStorage.setItem("token", dataRes.data.token);
    localStorage.setItem("refreshToken", dataRes.data.tokenRefresh);
    localStorage.setItem("payloadData", dataRes.data.payload);
    sessionStorage.setItem("IdUser", dataRes.data.idUser);
    console.log(dataRes.data.payload);
    sessionStorage.setItem("loginStatus", 1);
    return true;
  }
  return false;
}
