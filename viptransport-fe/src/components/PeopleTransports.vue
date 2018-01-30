<template>
    <v-container fluid
                 class="no-padding brown--text text-xs-center">
        <v-layout row
                  class="mt-5">
            <v-flex xs10
                    offset-xs1
                    md6
                    offset-md3>
                <h3 v-if="languageId == 1">Preprava osôb</h3>
                <h3 v-else>Personal transports</h3>
            </v-flex>
        </v-layout>
        <v-layout row
                  class="mt-4 mb-5">
            <v-flex xs10
                    offset-xs1
                    md6
                    offset-md3>
                <p v-if="languageId == 1">Zabezpečujeme prepravu osôb pre jednotlivcov aj firmy. Chystáte sa na lyžovačku, vianočné trhy do historického centra Viedne, či na dovolenku? My Vás tam dopravíme!</p>
                <p v-else>We provide transportation for individuals and businesses. Are you going skiing, visiting Christmas markets or the historic center of Vienna, or other recreation? We will take you there!</p>
            </v-flex>
        </v-layout>
        <v-divider class="mt-4 mb-5"></v-divider>
        <v-layout>
            <v-flex>
                <v-list class="transparent">
                    <h4 v-if="languageId == 1">Zabezpečujeme prepravu na podujatia ako</h4>
                    <h4 v-else>We provide transportation for following events</h4>
                    <v-layout row>
                        <v-flex xs10
                                offset-xs1
                                md4
                                offset-md4>
                            <v-list-tile avatar
                                         v-for="item in listItems"
                                         v-bind:key="item.title">
                                <v-list-tile-content>
                                    <v-list-tile-title class="brown--text text-xs-left">
                                        {{item.title}}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-icon class="brown--text">{{ item.icon }}</v-icon>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-flex>
                    </v-layout>
                </v-list>
            </v-flex>
        </v-layout>
        <v-divider class="mt-4 mb-3"></v-divider>
        <app-people-carousel class="mt-5 mb-5"></app-people-carousel>
        <v-divider class="mt-4 mb-3"></v-divider>
        <v-layout row
                  class="mt-5">
            <v-flex xs10
                    offset-xs1
                    md6
                    offset-md3>
                <h3 v-if="languageId == 1">Služby vodiča</h3>
                <h3 v-else>Driver service</h3>
            </v-flex>
        </v-layout>
        <v-layout row
                  class="mt-4 mb-5">
            <v-flex xs10
                    offset-xs1
                    md6
                    offset-md3>
                <p v-if="languageId == 1"> Naša spoločnosť ponúka pre svojich klientov aj doplnkovú službu k službe prepravy osôb a to je služba vodiča. Ak má klient k dispozícií vlastné auto, na ktorom chce, aby sa preprava zrealizovala spoločnosť mu zabezpečí profesionálneho vodiča, ktorý si auto vyzdvihne na určenom mieste, na tomto aute spraví prepravu zákazníka a následne auto vráti. </p>
                <p v-else>Our company also offers an additional service to the passenger transport, called the driver service. If the client has their own car, which they would like to use for the transport, we can provide a professional driver who will pick up the car at a specified place, realize the transport of the customer and then return the car.</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  computed: {
    listItems: {
      get() {
        return this.$store.getters.listItems;
      }
    },
    languageId: {
      get() {
        return this.$store.getters.selectedLanguageId;
      }
    }
  }
};
</script>

<style scoped>
.transparent {
  background-color: rgba(0, 0, 0, 0);
}
</style>
