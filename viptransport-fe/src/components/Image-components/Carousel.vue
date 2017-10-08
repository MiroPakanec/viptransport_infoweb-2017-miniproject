<template>
    <v-layout class="mb-4">
        <v-flex xs12>
            <v-carousel interval="15000" v-bind:class="this.class" hide-controls>
                <v-carousel-item v-for="image in images" :src="image.url" :key="image.id">
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>
</template>

<script>
var MobileDetect = require('mobile-detect');
var md = new MobileDetect(window.navigator.userAgent);

export default {
    computed: {
        isMobile() {
            return md.mobile();
        },
        isTablet() {
            return md.tablet();
        },
        root() {
            if (this.isTablet) return '../../static/main-carousel-tablet/new/';
            if (this.isMobile) return '../../static/main-carousel-mobile/new/';
            return '../../static/main-carousel/b/';
        },
        class() {
            if (this.isTablet) return 'carousel-tablet';
            if (this.isMobile) return 'carousel-mobile';
            return 'carousel';
        },
        images() {
            return [
                { id: '1', title: 'Sup', url: this.root + '1.jpg' },
                { id: '2', title: 'Sup', url: this.root + '2.jpg' },
                { id: '3', title: 'Sup', url: this.root + '3.jpg' },
                { id: '4', title: 'Sup', url: this.root + '4.jpg' },
            ];
        }
    }
}
</script>

<style scoped>
.carousel {
    height: 400px;
}

.carousel-mobile {
    height: 350px;
}

.carousel-tablet {
    height: 500px;
}
</style>
