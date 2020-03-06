<template>
    <div class="footer">
        <v-footer
    color="indigo accent-4"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="(icon, index) in icons"
        :key="index"
        color="white"
        text
        rounded
        :href="icon.href"
        class="my-2 icon"
      >
        <v-icon>{{ icon.name }}</v-icon>
      </v-btn>

      <v-col
        class="indigo accent-3 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Julián</strong>
      </v-col>
    </v-row>
  </v-footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            icons: [
                { name: 'mdi-facebook', href: 'https://www.facebook.com/julian.atehortua.969/'},
                { name: 'mdi-linkedin', href: 'https://www.linkedin.com/in/juli%C3%A1n-perdomo-67a32417a/'},
                { name: 'mdi-twitter' , href: 'https://twitter.com/'},
                { name: 'mdi-instagram' , href: 'https://instagram.com/'},
            ]
        }
    }
}
</script>

<style scoped>
    .icon:hover{
        text-decoration: none;
    }
</style>