import axios from "axios";

const url = "http://localhost:9090/";

export function findUser(email) {
  return axios.get(url + "customers", {
    params: {
      email: email,
    },
  });
}

export function getProducts() {
  return axios.get(url + "products");
}

export function purchaseProduct(res) {
  return axios.post(url + "purchaseProduct", res);
}

export function redeemPoints(res) {
  console.log(res);
  return axios.post(url + "redeemPoints", res);
}

export function addCustomer(res) {
  
  return axios.post(url + "register", res);
}
