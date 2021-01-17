<template>
  <div>
    <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="/profile"><router-link to="/profile"><img src="../assets/logo.svg" width='50' alt="weighty-logo"></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class='nav__item' to="/profile">Mi cuenta</router-link>
        <router-link class='nav__item' to="/family">Familia</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <span class="nav__item" @click="signOut">Cerrar sesión</span>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "NavBar",
  methods: {
    signOut(){
      firebase.auth().signOut()
      this.$router.push("/login");

    }
  },
};
</script>

<style scoped>
.nav__item{
  color: #707070;
  padding: 3px 0.5rem;
}
.nav__item:hover{
  color: #707070;
  text-decoration: none;
  border-bottom: 3px solid turquoise;
  cursor:pointer;
}


</style>
