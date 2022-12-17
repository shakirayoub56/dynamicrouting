<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <router-link to="/HelloWorld">Hello</router-link><br />
  <router-link to="/Home">Home</router-link><br />
  <router-link to="/users/captain">captain's page</router-link><br />
  <router-link to="/users/jack">jack's page</router-link><br />
  <router-link to="/users/sparrow">sparrow's page</router-link><br />

  <router-view></router-view>
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
import users from "./components/users.vue";
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    HelloWorldVue,
    users,
    Home,
  },
};
</script>


