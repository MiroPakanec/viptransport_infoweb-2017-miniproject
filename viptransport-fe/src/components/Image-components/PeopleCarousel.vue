<template>
    <v-layout class="mb-4">
        <v-flex xs12>
            <v-carousel interval="15000" v-if="this.isMobile === false" class="carousel brown--text" hide-controls>
                <v-carousel-item v-for="image in images" :src="image.url" :key="image.id">
                </v-carousel-item>
            </v-carousel>
            <v-carousel interval="15000" v-else class="carousel-mobile" hide-controls>
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
            rootMain: '../../static/people-carousel-white/',
            rootMainMobile: '../../static/airport-carousel-white-mobile/',
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
            return [
                { id: '1', title: 'Sup', url: this.rootMain + '1.jpg' },
                { id: '1', title: 'Sup', url: this.rootMain + '2.jpg' },
                { id: '1', title: 'Sup', url: this.rootMain + '3.jpg' },
                { id: '1', title: 'Sup', url: this.rootMain + '4.jpg' },
                { id: '1', title: 'Sup', url: this.rootMain + '5.jpg' },
                { id: '1', title: 'Sup', url: this.rootMain + '6.jpg' },
                { id: '1', title: 'Sup', url: this.rootMain + '7.jpg' },
                { id: '1', title: 'Sup', url: this.rootMain + '8.jpg' },
                { id: '1', title: 'Sup', url: this.rootMain + '9.jpg' },
                { id: '1', title: 'Sup', url: this.rootMain + '10.jpg' }

            ];
        },
        imagesMobile() {
            return [
                { id: '1', title: 'Sup', url: this.rootMainMobile + '1.jpg' },
                { id: '1', title: 'Sup', url: this.rootMainMobile + '2.jpg' },
                { id: '1', title: 'Sup', url: this.rootMainMobile + '3.jpg' },
                { id: '1', title: 'Sup', url: this.rootMainMobile + '4.jpg' },
                { id: '1', title: 'Sup', url: this.rootMainMobile + '5.jpg' },
                { id: '1', title: 'Sup', url: this.rootMainMobile + '6.jpg' },
                { id: '1', title: 'Sup', url: this.rootMainMobile + '7.jpg' }
            ];
        },
    }
}
</script>

<style scoped>
.carousel {
    width: 600px;
    height: 400px;
    margin: auto;
}

.carousel-mobile {
    height: 300px;
    width: 350px;
}
</style>
