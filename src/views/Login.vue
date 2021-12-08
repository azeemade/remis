<template>
    <div class="mx-16">
        <div>
            <p class="h4">Login into your account</p>
            <div class="mb-4">
                <label for="email">Email</label>
                <input class="form-control" v-model="data.email" type="email">
            </div>
            <div class="mb-3">
                <label for="password">Password</label>
                <input class="form-control" v-model="data.password" type="password">
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn  btn-primary" @click="handleLogin" :disabled="Loading">Login</button>
            </div>
            <p v-if="!message">{{message}}</p>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Login',
    data(){
        return{
            data: {
                email: null,
                password: null
            },
            Loading: false,
            message: null
        }
    },
    methods:{
        handleLogin(){
            this.loading = true
            var data = this.data
            this.$store.dispatch("auth/login", data)
            .then(() => {
                this.$router.push("/drivers");
            },
                (error) => {
                    this.loading = false;
                    this.message = error.message
                }
            );
        }
    }
}
</script>
<style>
    .mx-16{
        margin: 0 16rem 16rem;
    }
</style>