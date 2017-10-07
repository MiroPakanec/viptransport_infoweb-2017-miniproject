<template>
    <v-layout row class="mt-4">
        <v-flex xs10 offset-xs1>
            <v-card>
                <v-card-media contain @click.native.stop="dialog = true" style="cursor:pointer" :src="this.url" height="200px">
                </v-card-media>
            </v-card>
            <v-dialog width="100%" transition="fade-transition" v-model="dialog" lazy absolute>

                <v-card class="bg-img">
                    <v-toolbar dark class="primary white">
                        <v-btn class="btn-stan" icon @click.native="dialog = false" dark>
                            <v-icon class="brown--text">close</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="btn-stan" flat @click.native="dialog = false" dark>
                            <a class="brown--text">Späť</a>
                        </v-btn>
                    </v-toolbar>
                    <img class="full-img text-xs-center" :src="this.url" alt="">
                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            dialog: false
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
</style>

