import api from "./axios";

/**
 * GraphQL client - ส่ง request แบบ GQL
 * @param {string} query - GraphQL query string
 * @param {object} variables - ตัวแปรสำหรับ query
 * @param {string} endpoint - endpoint path (default: "community")
 * @returns {Promise} - response.data (ตัด noise ออก)
 */
const gql = async (query, variables = {}, endpoint = "community") => {
    const res = await api.post(endpoint, { query, variables });
    return res.data;
};

export default gql;
