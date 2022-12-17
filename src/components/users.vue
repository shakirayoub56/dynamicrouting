<template>
  <h1>users here: {{ name }}</h1>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  name: "users",
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    const route = useRoute();
    console.log("route", route.params.name);
    this.name = route.params.name;
  },
  updated() {
    const route = useRoute();
    console.log("route", route.params);
    this.name = route.params.name;
  },
};
</script>