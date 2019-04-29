import Vue from "vue";
import Vuex from "vuex";
import { loginByUsername, logout, getUserInfo } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    token: getToken(),
    name: "",
    introduction: "",
    roles: []
  },
  mutations: {},
  actions: {}
});
