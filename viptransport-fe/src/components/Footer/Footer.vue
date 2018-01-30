<template>
    <v-container fluid class="no-padding brown--text">
        <v-divider class="mt-4"></v-divider>
        <v-layout class="pt-5 pb-3 bg-darker">
            <v-flex xs10 offset-xs1>
                <v-layout row wrap class="text-xs-center">
                    <v-flex xs12 md4 class="mt-4">
                        <h6>
                            <v-icon class="brown--text">public</v-icon> {{socialMediaTitle}}</h6>
                        <p v-html="socialMediaContent"></p>
                        <v-divider v-if="isMobile"></v-divider>
                    </v-flex>
                    <v-flex xs12 md4 class="mt-4">
                        <h6>
                            <v-icon class="brown--text">report_problem</v-icon> {{transportationRulesTitle}}</h6>
                        <p v-html="transportationRulesContent"></p>
                        <v-divider v-if="isMobile"></v-divider>
                    </v-flex>
                    <v-flex xs12 md4 class="mt-4">
                        <h6>
                            <v-icon class="brown--text">phone</v-icon> {{ contactTitle }}</h6>
                        <p v-html="contactContent"></p>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout class="pt-3">
            <v-flex xs10 offset-xs1 class="text-xs-center">
                <p class="small">Developed by
                    <a href="http://miroslavpakanec.com/" target="blank">Miroslav Pakanec</a>
                </p>
                <p class="small">Copyright © 2017, VIP transport s.r.o.</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            }
            return false;
        },
        socialMediaTitle:{
            get(){return this.$store.getters.socialMediaTitle}
        },
        transportationRulesTitle:{
            get(){return this.$store.getters.transportationRulesTitle}
        },
        contactTitle:{
            get(){return this.$store.getters.contactTitle}
        },
        socialMediaContent:{
            get(){return this.$store.getters.socialMediaContent}
        },
        transportationRulesContent:{
            get(){return this.$store.getters.transportationRulesContent}
        },
        contactContent:{
            get(){return this.$store.getters.contactContent}
        }
    }
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 3vh;
}

p {
    font-size: 2vh;
}
</style>
