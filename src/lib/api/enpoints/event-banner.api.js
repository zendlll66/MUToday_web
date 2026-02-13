import api from "../axios";

const EventBannerAPI = {
  getBanners: () => api.get("event-banner"),
};

export default EventBannerAPI;
