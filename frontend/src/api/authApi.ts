
import { useUserStore } from "@/stores/user";
import axios from "axios";

// si l'action met + de 20secondes à faire une réponse, on arrête
axios.defaults.timeout = 20000;

const api = axios.create({ baseURL: 'http://localhost:3000' });

api.interceptors.response.use(
    (response) => response, // si la requete réussi, je retourne la réponse
    async (error) => {
        const userStore = useUserStore();
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            if (!userStore.refresh_token) {
                console.error('No token, logging out');
                userStore.logout();
                return Promise.reject(error);
            }
            try {
                await userStore.getNewToken(); // MAJ du token dans le store
                originalRequest.headers["Authorization"] = `Bearer ${userStore.access_token}`; // réajoute le token d'id dans le header
                return api(originalRequest); // relance la requete avec un nouveau token
            }
            catch (refreshError) {
                console.error('Refresh token failed:', refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export { api };