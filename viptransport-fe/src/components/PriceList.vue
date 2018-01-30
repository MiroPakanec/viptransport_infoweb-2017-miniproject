<template>
    <v-container fluid class="no-padding brown--text text-xs-center">
        <v-layout row class="mt-5 mb-4">
            <v-flex v-if="languageId == 1" xs10 offset-xs1 md8 offset-md2>
                <h3>Cenník</h3>
                <p>Všetky ceny sú určované dohodou. Okrem klasickej platby v hotovosti je samozrejmosťou aj možnosť platby kartou. V tabulke je orientačný cenník našich služieb na základných trasách.</p>
            </v-flex>
            <v-flex v-else xs10 offset-xs1 md8 offset-md2>
                <h3>Price list</h3>
                <p>All prices are specified by agreement. Besides a standard payment with cash, you can also choose to pay with your credit card. Below you can find a tentative price list for our standard routes.</p>
            </v-flex>
        </v-layout>
        <v-layout row class="mt-4">
            <v-flex xs10 offset-xs1 md8 offset-md2>
                <app-table></app-table>
            </v-flex>
        </v-layout>
        <v-layout row class="mt-4">
            <v-flex xs12 text-xs-center>
                <p v-if="languageId == 1" class="brown--text small">Cenník je platný od 01.10.2017</p>
                <p v-else class="brown--text small">The price list is valid since the 1st of October 2017.</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Table from './PriceTable/Table'

export default {
    components: {
        'app-table': Table
    },
    computed:{
        languageId:{
            get(){return this.$store.getters.selectedLanguageId;}
        }
    }
}
</script>

<style scoped>
.small {
    font-size: 1.6vh;
}
</style>

