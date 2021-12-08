import { createStore } from 'vuex'
import { auth } from "./auth.module";

let companyId = localStorage.getItem('companyId');
const store = createStore({
    modules: {auth},
    state(){
        return {
            companyId: companyId ? companyId : null
        }
    },

    mutations: {
        getCompanyId(state, id){
            state.companyId = id
            localStorage.setItem('companyId', id);
        },
    },

    getters:{
        companyId: state =>{
            return state.companyId
        }
    }

})

export default store
