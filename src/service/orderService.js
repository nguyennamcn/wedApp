import { https } from "./config";

export const orderService = {
  postOrder: (data) => {
    console.log(data)
    return https.post("/order-service/api/v1/orders", data);
  },

  getAllOrder: (criteria) => {
    return https.get("/order-service/api/v1/orders/shop", {
      params: criteria, // đúng kiểu params query
    });
  },
};
