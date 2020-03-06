<template>
    <div class="navigation mb-8">
        <v-app-bar 
            class="app-bar"
            color="indigo accent-4"
            dense
            dark
            fixed
            >
                <v-spacer></v-spacer>
                <v-btn 
                class="mr-2 mb-2"
                icon 
                @click="previous()" 
                >
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-btn 
                class="mr-3 mb-2"
                icon 
                @click="next()" 
                >
                    <v-icon class="text-center">mdi-arrow-right</v-icon>
                </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            
        }
    }, 
    methods: {
        previous() {
            this.$router.go(-1);
        },
        next() {
            this.$router.go(1);
        }
    }
}
</script>

<style scoped>
    .app-bar{
        border-radius: 0px 0px 94px 0px;
        -moz-border-radius: 0px 0px 94px 0px;
        -webkit-border-radius: 0px 0px 94px 0px;
        width: 136px;
        height: 40px !important;
    }
    .navigation{
        justify-content: end;
    }
</style>