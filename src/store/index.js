import { createStore } from 'vuex'
import { auth } from "./auth.module";


const store = createStore({
    modules: {auth},
    state(){
        return {
            companyId: ''
        }
    },

    mutations: {
        getCompanyId(state, id){
            state.companyId = id
        },
    },

    getters:{
        companyId: state =>{
            return state.companyId
        }
    }

})

export default store
