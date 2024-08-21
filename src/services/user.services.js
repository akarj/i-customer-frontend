import { axiosInstance } from "./Axios";

export async function createUser(userData) {
    const response = await axiosInstance.post(`/user`, userData)
    return response.data;
}


export default {
    createUser
}