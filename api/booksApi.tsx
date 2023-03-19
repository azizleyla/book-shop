import { baseApi } from "./baseApi";

export const BooksApi = {
  async getAllBooks() {
    const response = await baseApi.get("/book");
    return response.data;
  },
  async updateFavorite({ id, data }: any) {
    const response = await baseApi.put(`/book/${id}/favorite`, data);
    return response.data;
  },
  async getBookById({ bookId }: any) {
    const response = await baseApi.get(`/book/${bookId}`);
    return response.data;
  },
};
