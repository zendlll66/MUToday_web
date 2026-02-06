import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
if (typeof window !== "undefined" && !baseURL) {
    console.warn("[API] NEXT_PUBLIC_API_URL is undefined - requests may fail");
}

const axiosBase = axios.create({
    baseURL: baseURL || "",
    timeout: 10000,
});

export default axiosBase;