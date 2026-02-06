import axiosBase from "./base";
import createHeader from "./header";
import Token from "./token";

const setupInterceptors = () => {
    axiosBase.interceptors.request.use(
        (config) => {
            config.headers = createHeader();
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosBase.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error && error.response && error.response.status === 401) {
                Token.remove();
                console.log("Unauthorized");
            }
            return Promise.reject(error);
        }
    );
}

export default setupInterceptors;