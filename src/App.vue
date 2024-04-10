<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contacts">Contacts</router-link> |
    <router-link to="/login">Log in</router-link> |
  </nav>
  <router-view/>
</template>
<script>
export default {
  name: 'App',
  components: {LogOutModal},
  data() {
    return {
      isLoggedIn: false,
      isAdmin: false
    }
  },
};
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
  color: #42b983;
}
</style>
