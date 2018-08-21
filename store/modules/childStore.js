import { ALERT_MOD } from '../actionTypes';

export default {
    state: {
        name: '来自Vuex state的数据',
    },
    mutations: {
        [ALERT_MOD](state, { name }) {
            state.name = name;
        }
    }
};