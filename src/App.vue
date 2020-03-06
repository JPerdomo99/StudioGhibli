<template>
  <v-app>
    <div class="html-ghibli">
      <Navigation></Navigation>
      <v-container>
        <router-view/>
      </v-container> 
    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'App',

  components: {
    Navigation,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .html-ghibli{
    min-height: 87%;
  }
</style>