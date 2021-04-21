// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

//load vuex
Vue.use(Vuex);

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

//to handle actions
const actions = {
  getImages({ commit }) {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=QsuiCh1qImJzhAisvs91ojbwKTcc2Gv9KBY4GBZnIHs"
      )
      .then((response) => {
        commit("SET_IMAGES", response.data);
        console.log(response.data);
      });
  },
};

const mutations = {
  SET_IMAGES(state, images) {
    state.images = images;
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
