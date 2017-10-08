<template>
    <v-container fluid class="no-padding brown--text">
        <v-divider class="mt-4"></v-divider>
        <v-layout class="pt-5 pb-3 bg-darker">
            <v-flex xs10 offset-xs1>
                <v-layout row wrap class="text-xs-center">
                    <v-flex xs12 md4 class="mt-4">
                        <h6>
                            <v-icon class="brown--text">public</v-icon> Socialne siete</h6>
                        <p>Sledujte aktuálne dianie v našej spoločnosti.<br> Sme na
                            <a href="https://www.facebook.com/viptransport.sk/" target="blank">Facebook</a> -u.</p>
                        <v-divider v-if="isMobile"></v-divider>

                    </v-flex>
                    <v-flex xs12 md4 class="mt-4">
                        <h6>
                            <v-icon class="brown--text">report_problem</v-icon> Prepravný poriadok</h6>
                        <p>Prepravný poriadok spoločnosti VIP transport, s.r.o. nájdete
                            <a href="../../static/documents/prepravnyporiadok.pdf" target="blank">TU</a>.</p>
                        <v-divider v-if="isMobile"></v-divider>

                    </v-flex>
                    <v-flex xs12 md4 class="mt-4">
                        <h6>
                            <v-icon class="brown--text">phone</v-icon> Kontakt</h6>
                        <p>VIP transport s.r.o. <br> Gemerská 4, 01008, Žilina<br> IČO: 46304959<br> DIČ: 2023323511<br> Mail: info@viptransport.sk<br>
                            <a href="tel:+421 911 301 111">Tel.: +421 911 301 111</a>
                        </p>

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
