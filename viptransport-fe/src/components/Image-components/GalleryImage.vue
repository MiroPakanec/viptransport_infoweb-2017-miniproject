<template>
    <v-layout row class="mt-4">
        <v-flex xs10 offset-xs1>
            <v-card>
                <v-card-media contain @click.native.stop="imageClicked()" style="cursor:pointer" :src="this.url" height="200px">
                </v-card-media>
            </v-card>
            <v-dialog width="100%" transition="fade-transition" v-model="dialog" lazy absolute>
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

                    <v-carousel interval="15000" v-if="this.isMobile === false" class="carousel brown--text" hide-controls>
                        <v-carousel-item class="carousel-item" v-for="image in carouselImages" :src="image.url" :key="image.id">
                        </v-carousel-item>
                    </v-carousel>
                    <v-carousel interval="15000" v-else class="carousel-mobile" hide-controls>
                        <v-carousel-item class="carousel-item" v-for="image in carouselImages" :src="image.url" :key="image.id">
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        id: {
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            dialog: false,
            imgStyle: {
                maxHeight: (screen.height / 100) * 80
            }
        }
    },
    methods: {
        imageClicked() {
            this.dialog = true;
            this.$store.commit("orderGalleryCarouselImages", this.id);
        }
    },
    computed: {
        carouselImages() {
            return this.$store.getters.galleryCarouselImages;
        },
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>
.full-img {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 500px;
}

.bg-img {
    background-color: #555555;
}

.carousel {

    height: 600px;
}

.carousel-item {
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
}

.carousel-mobile {
    height: 300px;
    width: 350px;
}
</style>

