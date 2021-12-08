<template>
    <div class="mx-16">
        <div>
            <router-link to="/drivers" class="btn btn-secondary mb-3">Go back</router-link>
            <div v-if="message != null">
                <p class="h6" :class="status=='Successful'?'text-success':'text-danger'">{{message}}</p>
            </div>

            <p class="text-center h4">Add new Driver</p>
            <div class="mb-3">
                <label for="name">Name</label>
                <input id="name" class="form-control" v-model="driver.name">
            </div>
            <div class="mb-3">
                <label for="email">Email</label>
                <input id="email" class="form-control" v-model="driver.email">
            </div>
            <div class="mb-3">
                <label for="email">Phone</label>
                <input id="email" class="form-control" v-model="driver.phone">
            </div>
            <div class="mb-3">
                <label for="email">Address</label>
                <input id="email" class="form-control" v-model="driver.address">
            </div>
            <div class="mb-3">
                <label for="email">City</label>
                <input id="email" class="form-control" v-model="driver.city">
            </div>
            <div class="mb-3">
                <label for="state">State</label>
                <input id="state" class="form-control" v-model="driver.state">
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-success w-50" @click="handleSubmit" :disabled="Loading">Submit</button>
            </div>
        </div>
    </div>
</template>
<script>
import authHeader from '../services/auth-header';
import {mapGetters} from 'vuex'
export default {
    name: 'NewDriver',
    data(){
        return{
            Loading: false,
            driver: {},
            message: null,
            status: null
        }
    },
    computed:{
        ...mapGetters(['companyId'])
    },
    methods:{
        handleSubmit(){
            this.Loading =true
            var config = {
                method: 'post',
                url: `http://demodev.remis.ng/Driver/Add/${this.companyId}`,
                data: JSON.stringify(this.driver),
                headers: authHeader()
            };

            this.axios(config)
            .then(response => {
                this.message = response.data.message
                this.status = response.data.status
                this.driver = {}
            })
            
            .catch(error => {
                this.message = error.data.message
                this.status = error.data.status
                this.Loading = false
            });
        }
    }
}
</script>