<template>
    <v-container fluid class="no-padding brown--text text-xs-center">
        <v-layout row class="mt-5">
            <v-flex xs10 offset-xs1 md6 offset-md3>
                <h3 v-if="languageId == 1">Letiskové transfery</h3>
                <h3 v-else>Airport transports</h3>
            </v-flex>
        </v-layout>
        <v-layout row class="mt-4 mb-4">
            <v-flex xs10 offset-xs1 md8 offset-md2>
                <p v-if="languageId==1"> Potrebujete prepravu na letisko v Bratislave alebo vo Viedni, letisko v Budapešti alebo v Prahe? Odvezieme vás, vašich priateľov, známych, rodinu alebo klientov či kolegov na letisko, prípadne vás prídeme vyzdvihnúť. Nemusíte sa o nič starať, šofér naloží aj vyloží batožinu, stačí len nastúpiť. Zistíme si prílety aj meškania a transfery prispôsobíme aktuálnej situácii. </p>
                <p v-else>
                    Do you need a transportation to the airport in Bratislava, Vienna, Budapest or Prague? We will drive or pick you up, as well as your friends, acquaintances, family and clients or colleagues. You will not have to worry about anything, your chauffeur will load and unload the luggage and check the arrivals and delays,
                    adapting to the situation.
                </p>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row class="mt-4 mb-2">
            <v-flex xs10 offset-xs1 md8 offset-md2>
                <p v-if="languageId == 1">Prílet alebo odlet z letiska podľa vášho želania: 24 hodín denne 7 dní v týždni. </p>
                <p v-else>Arrival or departure from an airport at your wishes: 24 hours a day, 7 days a week.</p>
            </v-flex>
        </v-layout>
        <v-divider class="mb-5"></v-divider>
        <app-airport-carousel></app-airport-carousel>

    </v-container>
</template>

<script>
export default {
  computed:{
      languageId:{
          get(){ return this.$store.getters.selectedLanguageId; }
      }
  }
}
</script>
