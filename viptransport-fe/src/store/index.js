import Vue from'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const images = [

    { id: 1, url: '/static/gallery/1.png' },
    { id: 2, url: '/static/gallery/2.png' },
    { id: 3, url: '/static/gallery/3.png' },
    { id: 4, url: '/static/gallery/4.png' },
    { id: 5, url: '/static/gallery/5.png' },
    { id: 6, url: '/static/gallery/6.png' },
    { id: 7, url: '/static/gallery/7.png' },
    { id: 8, url: '/static/gallery/8.png' },
    { id: 9, url: '/static/gallery/9.png' },
    { id: 10, url: '/static/gallery/11.jpg' },
    { id: 11, url: '/static/gallery/12.jpg' },
    { id: 12, url: '/static/gallery/13.jpg' },
    { id: 13, url: '/static/gallery/14.jpg' },
    { id: 14, url: '/static/gallery/15.jpg' },
    { id: 15, url: '/static/gallery/16.jpg' },
    { id: 16, url: '/static/gallery/17.jpg' },
    { id: 17, url: '/static/gallery/18.jpg' },
    { id: 18, url: '/static/gallery/19.jpg' },
    { id: 19, url: '/static/gallery/20.jpg' },
    { id: 20, url: '/static/gallery/21.jpg' },
    { id: 21, url: '/static/gallery/22.jpg' },
    { id: 22, url: '/static/gallery/23.jpg' },
    { id: 23, url: '/static/gallery/24.png' },
    { id: 24, url: '/static/gallery/25.png' },
    { id: 25, url: '/static/gallery/26.jpg' },
    { id: 26, url: '/static/gallery/27.jpg' },
    { id: 27, url: '/static/gallery/28.png' },
    { id: 28, url: '/static/gallery/29.jpg' },
    { id: 29, url: '/static/gallery/30.jpg' },
    { id: 30, url: '/static/gallery/31.jpg' },
    { id: 31, url: '/static/gallery/32.jpg' },
    { id: 32, url: '/static/gallery/33.jpg' },
    { id: 33, url: '/static/gallery/34.jpg' },
    { id: 34, url: '/static/gallery/35.jpg' },
    { id: 35, url: '/static/gallery/36.jpg' },
    { id: 36, url: '/static/gallery/37.jpg' },
    { id: 37, url: '/static/gallery/38.jpg' },
    { id: 38, url: '/static/gallery/39.jpg' }
]

export const store = new Vuex.Store({
    state: {
        galleryImages: images,
        galleryCarouselImages: images
    },
    mutations: {
        orderGalleryCarouselImages(state, payload){
            let sliceIndex = payload - 1;

            let end = state.galleryImages.slice(1, sliceIndex);
            let beginning = state.galleryImages.slice(sliceIndex);

            let images = beginning.concat(end);

            state.galleryCarouselImages = images;
        }
    },
    actions: {},
    getters: {
        galleryImages(state){
            return state.galleryImages;
        },
        galleryCarouselImages(state){
            return state.galleryCarouselImages;
        }
    }
});