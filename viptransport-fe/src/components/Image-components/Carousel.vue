<template>
    <v-layout class="mb-4">
        <v-flex xs12>
            <v-carousel v-if="this.isMobile === false" class="carousel" hide-controls>
                <v-carousel-item v-for="image in images" :src="image.url" :key="image.id">
                </v-carousel-item>
            </v-carousel>
            <v-carousel v-else class="carousel-mobile" hide-controls>
                <v-carousel-item v-for="image in imagesMobile" :src="image.url" :key="image.id">
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data: function() {
        return {
            rootMain: '../../static/main-carousel/',
            rootMainMobile: '../../static/main-carousel-mobile/',
        }
    },
    computed: {
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            }
            return false;
        },
        images() {
            let images = [
                { id: '2', title: 'Sup', url: this.rootMain + '2.jpg' },
                { id: '4', title: 'Sup', url: this.rootMain + '4.jpg' },
                { id: '6', title: 'Sup', url: this.rootMain + '6.jpg' },
                { id: '8', title: 'Sup', url: this.rootMain + '8.jpg' },
                { id: '7', title: 'Sup', url: this.rootMain + '7.jpg' },
                { id: '9', title: 'Sup', url: this.rootMain + '9.jpg' },
            ];

            return images;
        },
        imagesMobile() {
            let images = [
                { id: '2', title: 'Sup', url: this.rootMainMobile + '1.jpg' },
                { id: '2', title: 'Sup', url: this.rootMainMobile + '2.jpg' },
                { id: '2', title: 'Sup', url: this.rootMainMobile + '3.jpg' },
                { id: '2', title: 'Sup', url: this.rootMainMobile + '4.jpg' },
            ];

            return images;
        },
    }
}
</script>

<style scoped>
.carousel {
    height: 400px;
}

.carousel-mobile {
    height: 300px;
}
</style>
