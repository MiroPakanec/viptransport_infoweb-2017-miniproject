<template>
    <v-container fluid class="no-padding brown--text text-xs-center">
        <v-layout row class="mt-5">
            <v-flex xs10 offset-xs1 md6 offset-md3>
                <h3 v-if="languageId == 1">Svadobná preprava</h3>
                <h3 v-else>Wedding transports</h3>
            </v-flex>
        </v-layout>
        <v-layout row class="mt-4 mb-4">
            <v-flex xs10 offset-xs1 md8 offset-md2>
                <p v-if="languageId == 1">
                    Svadba je nezabudnuteľný okamih, ktorý si zaslúži vhodné svadobné vozidlá. To má nielen svoje praktické, ale najmä estetické dôvody. Pekné svadobné vozidlo vyvoláva dobrý dojem a v mysliach svadobčanov zanechá pozitívne spomienky. Vozidlá našej spoločnosti spolu so šoférom sú pripravené plniť svoju reprezentatívnu úlohu a s nadšením vám pomôžu pri tejto jedinečnej spoločenskej udalosti. Naše vozidlá so šoférom sú vám počas svadobného dňa neustále k dispozícii a pripravené na okamžitý presun, či už z príprav na obrad, z obradu na hostinu alebo na svadobné fotenie. Doprajte si na vašej svadbe komfort a jedinečnosť vo vysokom štýle. </p>
                <p v-else>
                    A wedding is always a happening that must be unforgettable. Therefore it also deserves appropriate vehicles for transport, not only due to practical but also aesthetic reasons. A car with a good design leaves an impression on the wedding guests as well as nice memories. We have our vehicles with the drivers ready to fit this representative role with enthusiasm and help you with this unique social event. We are ready to offer service throughout the whole wedding day, always available for immediate transfer, either from the preperation for the ceremony, from the ceremony itself to the wedding party or to the wedding photoshoot. Treat yourself with comfort and uniqueness in good style.
                </p>
            </v-flex>
        </v-layout>
        <app-wedding-carousel></app-wedding-carousel>
    </v-container>
</template>

<script>
export default {
  computed:{
      languageId:{
          get(){ return this.$store.getters.selectedLanguageId;}
      }
  }
}
</script>
