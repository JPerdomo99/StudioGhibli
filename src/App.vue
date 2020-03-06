<template>
  <v-app>
    <Navigation></Navigation>
    <v-container>
      <router-view/>
    </v-container> 
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue"

export default {
  name: 'App',

  components: {
    Navigation
  },

  data: () => ({
    //
  }),
};
</script>
