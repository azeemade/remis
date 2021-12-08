<template>
    <div class="mx-16">
        <div v-if="driver">
            <router-link to="/drivers" class="btn btn-secondary mb-3">Go back</router-link>
            <p class="text-center h4">Edit Driver</p>
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
            <div class="d-flex justify-content-center mb-5">
                <button class="btn btn-primary w-50" @click="handleEdit" :disabled="Loading">Edit</button>
            </div>
            <p>{{message}}</p>
        </div>
        <div v-else>
            <p>Nothing to see here yet!</p>
        </div>
    </div>
</template>
<script>
import authHeader from '../services/auth-header';
import {mapGetters} from 'vuex';
export default {
    name: 'EditDriver',
    data(){
        return{
            Loading: false,
            driver: null,
            message: null
        }
    },
    computed:{
        ...mapGetters(['companyId'])
    },
    methods:{
        handleEdit(){
            this.Loading = true;
            var driver = {
                name: this.driver.name,
                email: this.driver.email,
                phone: this.driver.phone,
                address: this.driver.address,
                city: this.driver.city,
                state: this.driver.state,
            }
            var config = {
                method: 'put',
                url: `http://demodev.remis.ng/Driver/Edit/${this.companyId}/${this.$route.params.id}`,
                data: JSON.stringify(driver),
                headers: authHeader()
            };

            this.axios(config)
            .then(response => {
                this.driver = response.data.data
                this.message = response.data.message
            })
            .catch(error => {
                this.message = error.response.data.message
                this.Loading = false
            });

        }
    },
    mounted(){
        var config = {
            method: 'get',
            url: `http://demodev.remis.ng/Driver/Details/${this.$route.params.id}`,
            //data: JSON.stringify(this.driver),
            headers: authHeader()
        };

        this.axios(config)
        .then(response => {
            this.driver = response.data.data
        })
    }
}
</script>