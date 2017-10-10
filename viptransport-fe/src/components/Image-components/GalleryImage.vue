<template>
    <v-layout row class="mt-4">
        <v-flex xs10 offset-xs1>
            <v-card>
                <v-card-media contain @click.native.stop="imageClicked()" style="cursor:pointer" :src="this.url" height="200px">
                </v-card-media>
            </v-card>
            <!--<v-dialog width="100%" transition="fade-transition" v-model="dialog" lazy absolute>
                <v-card class="bg-img">
                    <v-toolbar dark class="primary white">
                        <v-btn class="btn-stan" icon @click.native="dialog = false" dark>
                            <v-icon class="brown--text">close</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="btn-stan" flat @click.native="dialog = false" dark>
                            <a class="brown--text">Späť</a>
                        </v-btn>
                    </v-toolbar>

                    <v-carousel :style="maxHeight" interval="15000" v-if="this.isMobile === false && this.carouselOn" hide-controls>
                        <v-carousel-item class="carousel-item" v-for="image in picturs" :src="image.url" :key="image.id">
                        </v-carousel-item>
                    </v-carousel>
                    <v-carousel :style="maxPhoneHeight" interval="15000" v-else class="carousel-mobile" hide-controls>
                        <v-carousel-item class="carousel-item" v-for="image in carouselImages" :src="image.url" :key="image.id">
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-dialog>-->
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        id: {
            required: true,
            carouselOn: true
        },
        url: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        imageClicked() {
            this.$store.commit("orderGalleryCarouselImages", this.id);
            this.$emit('imageClick')
        }
    }
}

</script>

<style scoped>

</style>

