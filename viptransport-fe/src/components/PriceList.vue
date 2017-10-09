<template>
    <v-container fluid class="no-padding brown--text text-xs-center">
        <v-layout row class="mt-5 mb-4">
            <v-flex xs10 offset-xs1 md8 offset-md2>
                <h3>Cenník</h3>
                <p>Všetky ceny sú určované dohodou. Okrem klasickej platby v hotovosti je samozrejmosťou aj možnosť platby kartou. V tabulke je orientačný cenník našich služieb na základných trasách.</p>
            </v-flex>
        </v-layout>
        <v-layout row class="mt-4">
            <v-flex xs10 offset-xs1 md8 offset-md2>
                <app-table></app-table>
            </v-flex>
        </v-layout>
        <v-layout row class="mt-4">
            <v-flex xs12 text-xs-center>
                <p class="brown--text small">Cenník je platný od 01.10.2017</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Table from './PriceTable/Table'

export default {
    components: {
        'app-table': Table
    }
}
</script>

<style scoped>
.small {
    font-size: 1.6vh;
}
</style>

