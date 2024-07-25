import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    askForData({ commit }, payload) {
      const ws = new WebSocket('ws://localhost:5070');

      ws.onopen = () => {
        ws.send(payload)
      }

      ws.onerror = () => {
        alert("You`re not connected to the server! Please launch server on the folder '/back', by executing command 'node app.js'")
      }

      ws.onmessage = (resp) => commit('setData', JSON.parse(resp.data))
    }
  },
  getters: {
    getData: (state) => state.data.length && state.data
  }
})
