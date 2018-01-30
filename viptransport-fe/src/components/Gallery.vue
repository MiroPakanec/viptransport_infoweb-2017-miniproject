<template>
    <v-container fluid class="brown--text">
        <v-layout row justify-center wrap>
            <v-flex xs12 md4 lg3 v-for="item in items" :key="item.id">
                <app-gallery-img @imageClick="imageClick" :url="item.url" :id="item.id"></app-gallery-img>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>
        <v-dialog width="100%" transition="fade-transition" v-model="dialog" lazy absolute>
            <v-card class="bg-img">
                <v-toolbar dark class="primary white">
                    <v-btn class="btn-stan" icon @click.native="dialog = false" dark>
                        <v-icon class="brown--text">close</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="btn-stan" flat @click.native="dialog = false" dark>
                        <a class="brown--text" v-if="languageId == 1">Späť</a>
                        <a class="brown--text" v-else>Back</a>
                    </v-btn>
                </v-toolbar>

                <v-carousel :style="maxHeight" v-if="isMobile===false && carousel" interval="15000" hide-controls>
                    <v-carousel-item class="carousel-item" v-for="(image,i) in carouselImages" :key="i" :src="image.url">
                    </v-carousel-item>
                </v-carousel>
                <v-carousel :style="maxPhoneHeight" interval="15000" v-else-if="carousel" class="carousel-mobile" hide-controls>
                    <v-carousel-item class="carousel-item" v-for="(image,i) in carouselImages" :key="i" :src="image.url">
                    </v-carousel-item>
                </v-carousel>
            </v-card>
        </v-dialog>
        <v-layout row wrap class="">
            <v-flex xs4 md2>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import GalleryImage from './Image-components/GalleryImage'

export default {
    data: function() {
        return {
            dialog: false,
            carousel: true,
            carouselImages: this.$store.getters.galleryCarouselImages,
            pics: [],
        }
    },
    components: {
        'app-gallery-img': GalleryImage
    },
    computed: {
        items() {
            return this.$store.getters.galleryImages;
        },
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            }
            return false;
        },
        maxHeight: function() {
            let maxHeight = (screen.height / 100) * 60 + "px";
            return { 'height': maxHeight };
        },
        maxPhoneHeight: function() {
            let maxHeight = (screen.height / 100) * 50 + "px";
            return { 'height': maxHeight };
        },
        languageId:{
            get(){return this.$store.getters.selectedLanguageId;}
        }
    },
    methods: {
        imageClick() {
            this.dialog = true;

            this.carousel = false;
            this.carouselImages = this.$store.getters.galleryCarouselImages;
            this.$nextTick(() => (this.carousel = true));
        }
    },
    watch: {
        dialog: function(val) {
            this.$store.commit("setGalleryDialog", val);

            if (val === false) {
                this.$store.commit("resetGalleryCarouselImages");
            }
        }
    }
}
</script>

<style scoped>
.full-img {
    display: block;
    margin: auto;
    max-width: 100%;
}

.bg-img {
    background-color: #555555;
}

.carousel-item {
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>

