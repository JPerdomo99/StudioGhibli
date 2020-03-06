<template>
    <div class="dfilmid mt-5">
        <v-expand-transition>
            <v-card v-show="expand">
                <v-card-title >{{ film.title }} {{ film.release_date }}</v-card-title>
                <v-card-subtitle>
                Director: {{ film.director }} Gender: Anime
                <v-img
                class="mt-2"
                :src="validateRt(film.rt_score)"
                width="30px"
                >
                </v-img>
                </v-card-subtitle>
                <v-card-text class="text-justify">{{ film.description }}</v-card-text>
                <v-card-subtitle>Producer: {{ film.producer }}</v-card-subtitle>
            </v-card>
        </v-expand-transition>
    </div>
</template>

<script>
import Axios from "axios";
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            film: [],
            id: this.$route.params.id,
            expand: false,
            certFresh: require('@/assets/Images/Rt/RottenFresh.png'),
            fresh: require('@/assets/Images/Rt/30px-Rotten_Tomatoes.svg.png'),
            rotten: require('@/assets/Images/Rt/30px-Rotten_Tomatoes_rotten.svg.png')
        }
    },
    methods: {
        async getFilmId() {
            try {
                this.film = await Axios.get(`https://ghibliapi.herokuapp.com/films/${this.id}`);
                this.film = this.film.data;
            } catch (error) {
                console.log(error);
            }finally {

            }
        },
        validateRt(n) {
            if(n >= 70){
                return this.certFresh;
            }else if(n >= 60 && n < 70){
                return this.fresh;
            }else{
                return this.rotten;
            }
        },
        showx(){
            this.expand = !this.expand;
        },
        ...mapActions(['getLogoMin'])
    },
    computed: {
    },
    created(){
        this.getFilmId();
    },
    mounted(){
        this.expand = true;
        this.getLogoMin();
    }
}
</script>