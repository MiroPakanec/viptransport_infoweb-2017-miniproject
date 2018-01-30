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
            rootMainMobile: '../../static/people-carousel-white-mobile/',
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
                { id: '4', title: 'Sup', url: this.rootMain + '4.jpg' },
                { id: '5', title: 'Sup', url: this.rootMain + '5.jpg' },
                { id: '6', title: 'Sup', url: this.rootMain + '6.jpg' },
                { id: '7', title: 'Sup', url: this.rootMain + '7.jpg' },
                { id: '8', title: 'Sup', url: this.rootMain + '8.jpg' },
                { id: '9', title: 'Sup', url: this.rootMain + '9.jpg' },
                { id: '10', title: 'Sup', url: this.rootMain + '10.jpg' },
                { id: '11', title: 'Sup', url: this.rootMain + '11.jpg' },
                { id: '12', title: 'Sup', url: this.rootMain + '12.jpg' },
                { id: '13', title: 'Sup', url: this.rootMain + '13.jpg' },
                { id: '14', title: 'Sup', url: this.rootMain + '14.jpg' },
                { id: '15', title: 'Sup', url: this.rootMain + '15.jpg' }

            ];
        },
        imagesMobile() {
            return [
                { id: '1', title: 'Sup', url: this.rootMainMobile + '1.jpg' },
                { id: '2', title: 'Sup', url: this.rootMainMobile + '2.jpg' },
                { id: '3', title: 'Sup', url: this.rootMainMobile + '3.jpg' },
                { id: '4', title: 'Sup', url: this.rootMainMobile + '4.jpg' },
                { id: '5', title: 'Sup', url: this.rootMainMobile + '5.jpg' },
                { id: '6', title: 'Sup', url: this.rootMainMobile + '6.jpg' },
                { id: '7', title: 'Sup', url: this.rootMainMobile + '7.jpg' },
                { id: '8', title: 'Sup', url: this.rootMainMobile + '8.jpg' },
                { id: '9', title: 'Sup', url: this.rootMainMobile + '9.jpg' },
                { id: '10', title: 'Sup', url: this.rootMainMobile + '10.jpg' },
                { id: '11', title: 'Sup', url: this.rootMainMobile + '11.jpg' },
                { id: '12', title: 'Sup', url: this.rootMainMobile + '12.jpg' },
                { id: '13', title: 'Sup', url: this.rootMainMobile + '13.jpg' },
                { id: '14', title: 'Sup', url: this.rootMainMobile + '14.jpg' },
                { id: '15', title: 'Sup', url: this.rootMainMobile + '15.jpg' }
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
