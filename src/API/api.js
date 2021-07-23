import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "482461d6-8235-4701-af35-901394fe0915"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get( `users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}


