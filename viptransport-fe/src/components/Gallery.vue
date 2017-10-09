<template>
    <v-container fluid class="brown--text">
        <v-layout row justify-center wrap>
            <v-flex xs12 md4 lg3 v-for="item in items" :key="item.id">
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
                { id: 1, url: '/static/gallery/1.png' },
                { id: 1, url: '/static/gallery/2.png' },
                { id: 1, url: '/static/gallery/3.png' },
                { id: 1, url: '/static/gallery/4.png' },
                { id: 1, url: '/static/gallery/5.png' },
                { id: 1, url: '/static/gallery/6.png' },
                { id: 1, url: '/static/gallery/7.png' },
                { id: 1, url: '/static/gallery/8.png' },
                { id: 1, url: '/static/gallery/9.png' },
                { id: 1, url: '/static/gallery/11.jpg' },
                { id: 1, url: '/static/gallery/12.jpg' },
                { id: 1, url: '/static/gallery/13.jpg' },
                { id: 1, url: '/static/gallery/14.jpg' },
                { id: 1, url: '/static/gallery/15.jpg' },
                { id: 1, url: '/static/gallery/16.jpg' },
                { id: 1, url: '/static/gallery/17.jpg' },
                { id: 1, url: '/static/gallery/18.jpg' },
                { id: 1, url: '/static/gallery/19.jpg' },
                { id: 1, url: '/static/gallery/20.jpg' },
                { id: 1, url: '/static/gallery/21.jpg' },
                { id: 1, url: '/static/gallery/22.jpg' },
                { id: 1, url: '/static/gallery/23.jpg' },
                { id: 1, url: '/static/gallery/24.png' },
                { id: 1, url: '/static/gallery/25.png' },
                { id: 1, url: '/static/gallery/26.jpg' },
                { id: 1, url: '/static/gallery/27.jpg' },
                { id: 1, url: '/static/gallery/28.png' },
                { id: 1, url: '/static/gallery/29.jpg' },
                { id: 1, url: '/static/gallery/30.jpg' },
                { id: 1, url: '/static/gallery/31.jpg' },
                { id: 1, url: '/static/gallery/32.jpg' },
                { id: 1, url: '/static/gallery/33.jpg' },
                { id: 1, url: '/static/gallery/34.jpg' },
                { id: 1, url: '/static/gallery/35.jpg' },
                { id: 1, url: '/static/gallery/36.jpg' },
                { id: 1, url: '/static/gallery/37.jpg' },
                { id: 1, url: '/static/gallery/38.jpg' },
                { id: 1, url: '/static/gallery/39.jpg' }
            ]
        }
    }
}
</script>


