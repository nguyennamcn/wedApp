import { https } from "./config";
import { localUserService } from "./localService";

export const appService = {
  postDataUser: () => {
    return https.post("/Products");
  },
  resetPassword: (email) => {
    return https.post("/user-service/api/v1/account/forgot-password", {
      email,
    });
  },
  conformOtp: (formData) => {
    return https.post("/user-service/api/v1/account/confirm-otp", formData);
  },
  resendOtp: (data) => {
    return https.post("/user-service/api/v1/account/resend-otp", data);
  },
  getProfile: () => {
    return https.get("/user-service/api/v1/users/profile");
  },
  updateProfile: (data) => {
    return https.put("/user-service/api/v1/users", data);
  },
  resetPass: (data) => {
    return https.post("/user-service/api/v1/account/reset-password", data);
  },
  postAddress: (data) => {
    return https.post("/user-service/api/v1/users/address/create", data);
  },
  updateAddress: (data) => {
    return https.put("/user-service/api/v1/users/address/update", data);
  },
  deleteAddress: (id) => {
    return https.delete(`/user-service/api/v1/users/address/delete/${id}`);
  },
  changePw: (data) => {
    return https.put("/user-service/api/v1/account/change-password", data);
  },

  // product
  getAllCate: () => {
    return https.get("/product-service/api/v1/categories");
  },

  getAllBrand: () => {
    return https.get("/product-service/api/v1/brands");
  },

  getSubCate: (id) => {
    return https.get(`/product-service/api/v1/categories/${id}/sub-categories`);
  },

  postProduct: (data) => {
    return https.post("/product-service/api/v1/products/upsert", data);
  },

  postImgPoduct: (id, data) => {
    return https.post(
      `/product-service/api/v1/products/${id}/upload_images`,
      data
    );
  },

  getDetailProduct: (id) => {
    return https.get(`/product-service/api/v1/products/${id}`);
  },

  getAllProduct: (page, pageSize) => {
    return https.get(`/product-service/api/v1/products?currentPage=${page}&pageSize=${pageSize}`);
  },
  
  updateProductStatus: (id, data) => {
    return https.put(`/product-service/api/v1/products/admin/approve/${id}`, data);
  },

  // store
  getAllStore: (currentPage, pageSize) => {
    return https.get("/store-service/api/v1/stores", {
      params: { currentPage, pageSize },
      headers: {
        API_SECRET_HEADER: "admin",
      },
    });
  },

  getDetailStore: (id) => {
    return https.get(`/store-service/api/v1/stores/detail/${id}`);
  },
  updateStoreStatus: (id, data) => {
    return https.put(`/store-service/api/v1/stores/verify-status/${id}`, data, {
      headers: {
        API_KEY: "EXE",
      },
    });
  },
};
