<template>
  <nav class="navbar container">
    <p class="h1 text-primary">REMIS</p>
    <div v-if="loggedIn">
      <button class="btn btn-outline-danger" @click="handleLogout">Logout</button>
    </div>
  </nav>
    <router-view></router-view>
</template>
<script>
import {mapGetters} from 'vuex'
export default{
  methods:{
    handleLogout(){
      this.$store.dispatch('auth/logout');
      this.$router.push('/')
    }
  },
  computed:{
    ...mapGetters('auth',['loggedIn'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
