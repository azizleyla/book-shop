import { baseApi } from "./baseApi"

export const BooksApi = {
    async getAllBooks(){
        const response = await  baseApi.get('/book')
        return response.data;
    },
    async updateFavorite(data:any){
         const response = await baseApi.put(`/book/update`,data);
         return response.data;
    }
}