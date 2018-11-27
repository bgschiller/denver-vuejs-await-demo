import Vue from "vue";
import Vuex from "vuex";
import { fetchCat } from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "unfetched", // loading, success, error
    error: null,
    cat: null
  },
  mutations: {
    FETCH_CAT(state) {
      state.error = null;
      state.status = "loading";
    },
    CAT_SUCCESS(state, cat) {
      state.error = null;
      state.status = "success";
      state.cat = cat;
    },
    CAT_ERROR(state, err) {
      state.error = err;
      state.status = "error";
    }
  },
  actions: {
    retrieveCat({ commit }) {
      commit("FETCH_CAT");
      fetchCat()
        .then(cat => commit("CAT_SUCCESS", cat))
        .catch(err => commit("CAT_ERROR", err));
    }
  }
});
