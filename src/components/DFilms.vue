<template>
    <div class="dfilms">
        <v-row>
            <v-col 
            cols="12" sm="6" md="4" v-for="(f, index) of films" :key="index"
            >
            <v-card
                
            >
                <v-card-title >{{ f.title }} {{ f.release_date }}</v-card-title>
                <v-card-subtitle>
                <v-img
                class="mt-2"
                :src="validateRt(f.rt_score)"
                width="30px"
                ></v-img>
                </v-card-subtitle>
                <v-card-text class="text-justify">{{ f.description }}</v-card-text>
                <v-card-subtitle>Gender: Anime 
                <div class="mt-1">
                <v-btn 
                dark
                small
                :to="{ name: 'FilmId', params: { id: f.id } }"
                class="btn-show-more"
                color="indigo accent-4">Show more</v-btn>
                </div>
                </v-card-subtitle>
            </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Axios from "axios";

export default {
    data() {
        return {
            films: [],
            title: [],
            certFresh: require('@/assets/Images/Rt/RottenFresh.png'),
            fresh: require('@/assets/Images/Rt/30px-Rotten_Tomatoes.svg.png'),
            rotten: require('@/assets/Images/Rt/30px-Rotten_Tomatoes_rotten.svg.png'),
            rt: ''
        }
    },
    methods: {
        async getFilms() {
            try {  
                this.films = await Axios.get("https://ghibliapi.herokuapp.com/films");
                this.films = this.films.data;   
                this.cutDescription();
            } catch (error) {
                console.log(error);
            } finally{

            }
        },
        cutDescription() {
            for(var i = 0; i < this.films.length; i++){
                this.films[i].description = this.films[i].description.substr(0, 200) + "...";
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
        }
    },
    computed: {
        /*rt(){
            return this.rt = validateRt();
        }*/
    },
    created() {
        this.getFilms();
    }
}
</script>

<style scoped>
    .btn-show-more:hover {
        text-decoration: none;
    }
</style>