import axiosBase from "./base";
import createHeader from "./header";
import Token from "./token";

const setupInterceptors = () => {
    axiosBase.interceptors.request.use(
        (config) => {
            config.headers = {
                ...config.headers,
                ...createHeader(),
            };
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosBase.interceptors.response.use(
        (response) => {
            if (response.data?.errors) {
                return Promise.reject(response.data.errors);
            }
            return response;
        },
        (error) => {
            const status = error?.response?.status;
            if (status === 401 || status === 403) {
                Token.remove();
                if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('token-invalid'));
                    const reloadKey = 'auth-reload-once';
                    if (!sessionStorage.getItem(reloadKey)) {
                        sessionStorage.setItem(reloadKey, '1');
                        window.location.reload();
                    }
                }
            }
            return Promise.reject(error);
        }
    );
}

export default setupInterceptors;