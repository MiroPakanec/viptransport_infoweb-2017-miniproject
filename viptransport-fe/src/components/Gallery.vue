<template>
    <v-container fluid class="brown--text">
        <v-layout row justify-center wrap>
            <v-flex xs6 md3 lg2 v-for="item in items" :key="item.id">
                <app-gallery-img :url="item.url"></app-gallery-img>
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
    data: function() {
        return {
            items: [
                { id: 1, url: '/static/main-carousel/1.jpg' },
                { id: 1, url: '/static/main-carousel/2.jpg' },
                { id: 1, url: '/static/main-carousel/3.jpg' },
                { id: 1, url: '/static/main-carousel/4.jpg' },
                { id: 1, url: '/static/main-carousel/5.jpg' },
                { id: 1, url: '/static/main-carousel/6.jpg' },
                { id: 1, url: '/static/main-carousel/8.jpg' },
                { id: 1, url: '/static/main-carousel/9.jpg' },
                { id: 1, url: '/static/wedding-carousel/1.jpg' },
                { id: 1, url: '/static/wedding-carousel/2.jpg' },
                { id: 1, url: '/static/wedding-carousel/3.jpg' },
                { id: 1, url: '/static/wedding-carousel/4.jpg' },
                { id: 1, url: '/static/wedding-carousel/5.jpg' },
                { id: 1, url: '/static/wedding-carousel/6.jpg' },
                { id: 1, url: '/static/wedding-carousel/7.jpg' },
                { id: 1, url: '/static/wedding-carousel/8.jpg' },
                { id: 1, url: '/static/wedding-carousel/9.jpg' },

            ]
        }
    }
}
</script>


