import {AxiosResponse} from "axios";
import {IUser} from "../interfaces";
import {urls} from "../constants/urls";
import {axiosService} from "./axios.service";


type Response<T> = Promise<AxiosResponse<T>>;

const usersService = {
    getAll: (): Response<IUser[]> => axiosService.get(urls.users),
};

export {
    usersService
}
