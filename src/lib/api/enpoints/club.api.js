import api from "../axios";

const ClubAPI = {
    getClubs: () => api.get("club"),
    getInterestTopics:() => api.get("interest/interest-topic-search")
};

export default ClubAPI;