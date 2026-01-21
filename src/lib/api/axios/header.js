import Token from "./token";

const createHeader = () => {
    const token = Token.get();

    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
    }
}

export default createHeader;