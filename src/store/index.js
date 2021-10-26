import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personList: [
        {
            name: 'Pepe',
            lastname: 'Ramirez',
            edad: '19'
        },
        {
            name: 'Fulano',
            lastname: 'Perez',
            edad: '28'
        },
        {
            name: 'Maria',
            lastname: 'Lopez',
            edad: '12'
        }
    ]
  },
  mutations:{},
  actions:{},
  getters: {}
})
