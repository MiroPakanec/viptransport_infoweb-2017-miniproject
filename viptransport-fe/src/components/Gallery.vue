<template>
    <v-container fluid class="brown--text">
        <v-layout row justify-center wrap>
            <v-flex xs12 md4 lg3 v-for="item in items" :key="item.id">
                <app-gallery-img :url="item.url" :id="item.id"></app-gallery-img>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>

        <v-layout row wrap class="">
            <v-flex xs4 md2>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import GalleryImage from './Image-components/GalleryImage'

export default {
    components: {
        'app-gallery-img': GalleryImage
    },
    computed: {
        items(){
            return this.$store.getters.galleryImages;
        }
    }
}
</script>


