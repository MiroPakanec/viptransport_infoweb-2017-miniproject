import Vue from "vue";
import Vuex from "vuex";

import Images from "./images.js";
import Languages from "./language/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    Languages
  },  
  state: {
    galleryImages: Images.getOrderedList(),
    galleryCarouselImages: Images.getOrderedList(),
    galleryDialog: false
  },
  mutations: {
    orderGalleryCarouselImages(state, payload) {

      let sliceIndex = payload - 1;

      let end = state.galleryCarouselImages.slice(0, sliceIndex);
      let beginning = state.galleryCarouselImages.slice(sliceIndex);      
      let newImages = beginning.concat(end);

      state.galleryCarouselImages = newImages;      
    },
    resetGalleryCarouselImages(state) {
      state.galleryCarouselImages = state.galleryImages;
    },
    setGalleryDialog(state, payload){
        state.galleryDialog = payload;
    }
  },
  actions: {},
  getters: {
    galleryImages(state) {
      return state.galleryImages;
    },
    galleryCarouselImages(state) {
      return state.galleryCarouselImages;
    },
    galleryDialog(state){
        return state.galleryDialog;
    }
  }
});
