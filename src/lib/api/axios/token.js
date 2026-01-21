const Token = {
    get:() => typeof window !== "undefined" ? localStorage.getItem("token") : null,
    set:(token) => typeof window !== "undefined" ? localStorage.setItem("token", token) : null,
    remove:() => typeof window !== "undefined" ? localStorage.removeItem("token") : null,
}

export default Token;