import api from "../axios";

const GuestAPI = {
    getGuest: () => api.get("guest/token"),
};

export default GuestAPI;       