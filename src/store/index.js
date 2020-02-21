import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imagelightbox: '',
    imageSelect: false
  },
  mutations: {
    setImage(state, image) {
      state.imagelightbox = image
    },
    showImageVar(state, imageSelect ) {
      state.imageSelect = imageSelect
    },
    closeImage(state) {
      state.imagelightbox = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
