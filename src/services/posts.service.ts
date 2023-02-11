import {AxiosResponse} from "axios";
import {IPost} from "../interfaces";
import {urls} from "../constants/urls";
import {axiosService} from "./axios.service";


type Response<T> = Promise<AxiosResponse<T>>;

const postsService = {
    getAll: (id: String): Response<IPost[]> => axiosService.get(`${urls.users}/${id}${urls.posts}`),
};
export {
    postsService
}
