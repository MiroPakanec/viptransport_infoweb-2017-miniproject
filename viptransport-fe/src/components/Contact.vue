<template>
    <v-container fluid class="no-padding brown--text text-xs-center">
        <v-layout row class="mt-5">
            <v-flex xs12 md4 offset-md4>
                <h3 v-if="languageId == 1">Kontakt</h3>
                <h3 v-else>Contact</h3>
                <v-divider></v-divider>
            </v-flex>
        </v-layout>
        <v-layout row class="mt-4 mb-4">
            <v-flex xs12>
                <h6>VIP transport s.r.o. <br> Gemerská 4, 01008, Žilina<br> IČO: 46304959<br> DIČ: 2023323511<br> <a href="mailto:info@viptransport.sk">Mail: info@viptransport.sk</a><br> <a href="tel:+421 911 301 111">Tel.: +421 911 301 111</a></h6>
            </v-flex>
        </v-layout>
        <app-carousel></app-carousel>
    </v-container>
</template>

<script>
export default {
  computed:{
      languageId:{
          get(){return this.$store.getters.selectedLanguageId;}
      }
  }
}
</script>
