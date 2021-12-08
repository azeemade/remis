<template>
    <div class="mx-16">
        <div v-if="driver">
            <table style="width:100%">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Code</th>
                    <th>Company name</th>
                    <th>State</th>
                </tr>
                <tr>
                    <td>{{driver.name}}</td>
                    <td>{{driver.phone}}</td>
                    <td>{{driver.email}}</td>
                    <td>{{driver.code}}</td>
                    <td>{{driver.companyName}}</td>
                    <td>{{driver.state}}</td>
                </tr>
            </table>
        </div>
        <div v-else>
            <p>Nothing to see here yet!</p>
        </div>
    </div>
</template>
<script>
import authHeader from '../services/auth-header';
export default {
    name: 'Driver',
    data(){
        return{
            driver: null
        }
    },
    beforeMount(){
        var config = {
            method: 'get',
            url: `http://demodev.remis.ng/Driver/Details/${this.$route.params.id}`,
            headers: authHeader()
        };

        this.axios(config)
        .then(response => {
            this.driver = response.data.data
        })
    }
}
</script>