<template>
  <!-- NET NINJA TUTORIAL #7? -->

  <div id="nav">

    <!-- <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> -->
    <router-link :to="{ name: 'Home' }">Home</router-link> 
    <router-link :to="{ name: 'About' }">About</router-link> 
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link> 
    <!-- anchor tags send a new request instead -->
  </div>

  <!-- Programmatic Navigation -->
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view/>  <!-- routes are rendered here! -->
</template>

<script>
export default({
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' }) // using an object...
    },
    back() {
      this.$router.go(-1) // minus is go back
    },
    forward() {
      this.$router.go(1)
    },
  },
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: anitaliased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
}

#nav a.router-link-exact-active {
  color:white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

</style>
