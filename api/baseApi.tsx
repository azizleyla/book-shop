import axios from "axios";

export const baseApi = axios.create({
    baseURL:"http://bookstoreaze-001-site1.etempurl.com/api/v1"
})