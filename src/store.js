import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        list: [],

    },
    mutations: {
        setList(state, payload) {
            state.list.push(payload)
        },
        delList(state, payload) {
            console.log(payload)
            state.list = state.list.filter(item => {
                console.log(item.date)
                if (item.date != payload) {
                    return item
                }
            })
        }
    }
})