<template>
    <div class="mx-16">
        <div class="text-center">
            <p class="h3">List of Drivers</p>
        </div>
        <div class="row">
            <div v-if="drivers.length == 0">
                <p>Loading...</p>
            </div>
            <div v-else>
                <div class="mb-3" v-if="message != null">
                    <div class="alert" :class="status == 'Successful' ? 'alert-success': 'alert-danger'">
                        <p :class="status == 'Successful' ? 'text-success': 'text-danger'">{{message}}}</p>
                    </div>
                </div>
                <div class="mb-5 d-flex justify-content-end">
                    <router-link to="/driver/new" class="btn btn-primary">Add new driver</router-link>
                </div>
                <table style="width:100%">
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr v-for="driver, index in drivers" :key="index">
                        <td>{{driver.name}}</td>
                        <td>{{driver.phone}}</td>
                        <td>{{driver.email}}</td>
                        <td><router-link :to="`/driver/${driver.id}`">view</router-link></td>
                        <td><router-link :to="`/driver/edit/${driver.id}`">edit</router-link></td>
                        <td><a class="btn text-danger" @click="handleDelete(driver.id)">Delete</a></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import authHeader from '../services/auth-header';
export default{
    name: 'Drivers',
    data(){
        return{
            drivers: [],
            companyId: null,
            message: null,
            status: null
        }
    },
    methods:{
        handleDelete(id){
            var config = {
                method: 'delete',
                url: `http://demodev.remis.ng/Driver/Delete/${this.companyId}/${id}`,
                headers: authHeader()
            };
            this.axios(config)
            .then(response => {
                this.message =  response.data.message
                this.status = response.data.status
            })
        },
        getDrivers(companyId){
            var config = {
                method: 'get',
                url: `http://demodev.remis.ng/Drivers?count=false&id=${companyId}`,
                headers: authHeader()
            };
            this.axios(config)
            .then(response => {
                this.drivers =  response.data.data.drivers
            })
        }
    },
    beforeMount(){
        var config = {
            method: 'get',
            url: 'http://demodev.remis.ng/Company/Details',
            headers: authHeader()
        };
        this.axios(config)
        .then(response => {
            let id = response.data.data.company.id
            this.$store.commit('getCompanyId', id)
            this.getDrivers(id);
            this.companyId = response.data.data.company.id
        })
    }
}
</script>