<template>
  <LogOutModal ref="logOutModalRef" @event-update-nav-menu="updateNavMenu"/>

  <nav>

    <template v-if="isLoggedIn">
      <template v-if="isAdmin" >
        <router-link to="/users">Users</router-link> |
        <router-link to="/clubs">Clubs</router-link> |
        <router-link to="/players">Players</router-link> |
      </template>

      <template v-else-if="isScout" >
        <router-link to="/players" @event-selected-player-click="forwardPlayerId" >Players</router-link> |
        <router-link to="/observations" ref="observationsViewRef">Observations</router-link> |
        <router-link to="/games">Games</router-link> |
      </template>

      <a href="#" @click="openLogOutModal">Log out</a>
    </template>
    <template v-else>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contacts</router-link> |
      <router-link to="/login">Log in</router-link>
    </template>
  </nav>

  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>
<script>
import LogOutModal from "@/components/modal/LogOutModal.vue";
import Modal from "@/components/modal/Modal.vue";

export default {
  name: 'App',
  components: {Modal, LogOutModal},
  data() {
    return {
      isLoggedIn: false,
      isAdmin: false,
      isScout: false
    }
  },
  methods: {

    updateNavMenu() {
      this.updateIsLoggedInValue()
      this.updateRoleNameValue()
    },

    updateIsLoggedInValue() {
      let userId = sessionStorage.getItem('userId')
      this.isLoggedIn = userId !== null
    },

    updateRoleNameValue() {
      if (this.isLoggedIn) {
        let roleName = sessionStorage.getItem('roleName');
        this.isAdmin = roleName === 'admin'
        this.isScout = roleName === 'scout'
      }
    },

    openLogOutModal() {
      this.$refs.logOutModalRef.$refs.modalRef.openModal()
    },

    forwardPlayerId(playerId) {
      this.$refs.observationsViewRef.forwardPlayerId(playerId)
    }

  },
  mounted() {
    this.updateNavMenu()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* Set the background image */
  background-image: url('../public/background.jpg');
  /* Set background size to cover the entire container */
  background-size: cover;
  /* Center the background image */
  background-position: center;
  /* Make sure the background image is fixed so it doesn't scroll with content */
  background-attachment: fixed;
  /* Add some fallback background color */
  background-color: #f8f8f8; /* Fallback color */
  /* Ensure content takes up the full height of the viewport */
  min-height: 100vh;
  /* Other styles for your app container */
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: darkgreen;
}
</style>
