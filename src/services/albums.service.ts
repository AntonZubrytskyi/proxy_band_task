import {AxiosResponse} from "axios";
import {IAlbum} from "../interfaces";
import {urls} from "../constants/urls";
import {axiosService} from "./axios.service";


type Response<T> = Promise<AxiosResponse<T>>;

const albumsService = {
    getAll: (id: Number): Response<IAlbum[]> => axiosService.get(`${urls.users}/${id}${urls.albums}`),
};
export {
    albumsService
}
