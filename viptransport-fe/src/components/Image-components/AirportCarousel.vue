<template>
    <v-layout class="mb-4">
        <v-flex xs12 md6 offset-md3>
            <v-carousel class="carousel" hide-controls>
                <v-carousel-item v-for="image in images" :src="image.url" :key="image.id">
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data: function() {
        return {
            rootMain: '../../static/airport-carousel/',
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
            return [
                { id: '1', title: 'Sup', url: this.rootMain + '1.jpg' },
                { id: '2', title: 'Sup', url: this.rootMain + '2.jpg' },
                { id: '3', title: 'Sup', url: this.rootMain + '3.jpg' },
                { id: '3', title: 'Sup', url: this.rootMain + '4.jpg' },
                { id: '3', title: 'Sup', url: this.rootMain + '5.jpg' },
                { id: '3', title: 'Sup', url: this.rootMain + '6.jpg' },
                { id: '3', title: 'Sup', url: this.rootMain + '7.jpg' }
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
    height: 300px;
}
</style>
