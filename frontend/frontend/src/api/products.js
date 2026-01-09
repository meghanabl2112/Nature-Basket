import { api } from "./client";

export const ProductAPI = {
  list: async () => (await api.get("/products")).data,
  create: async (payload) => (await api.post("/products", payload)).data,
};
