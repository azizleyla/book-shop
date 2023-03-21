import { baseApi } from "./baseApi";

interface Props {
  id: number;
  data: { isFavorite: boolean };
}
export const BooksApi = {
  async getAllBooks() {
    const response = await baseApi.get("/book");
    return response.data;
  },
  async updateFavorite({ id, data }: Props) {
    const response = await baseApi.put(`/book/${id}/favorite`, data);
    return response.data;
  },
  async getBookById(bookId: number) {
    const response = await baseApi.get(`/book/${bookId}`);
    return response.data;
  },
};
