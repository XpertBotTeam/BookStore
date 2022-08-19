import { createStore } from "vuex";
import axiosClient from "../axios";
const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post("/register", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },

        login({ commit }, user) {
            return axiosClient.post("/login", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });

            // return fetch(" http://127.0.0.1:8000/api/register", {
            //     headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },

            //     method: "POST",
            //     body: JSON.stringify(user),
            // })
            //     .then((res) => res.json())
            //     .then((res) => {
            //         commit("setUser", res);
            //         return res;
            //     });
        },
        logout({ commit }) {
            return axiosClient.post("/logout").then((response) => {
                commit("logout");
                return response;
            });
        },
    },
    mutations: {
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem("TOKEN", userData.token);
        },
    },
    modules: {},
});
export default store;
