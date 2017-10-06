<template>
    <v-container fluid class="no-padding brown--text text-xs-center">
        <v-layout row class="mt-5">
            <v-flex xs10 offset-xs1 md6 offset-md3>
                <h3>Preprava osôb</h3>
            </v-flex>
        </v-layout>
        <v-layout row class="mt-4 mb-5">
            <v-flex xs10 offset-xs1 md6 offset-md3>
                <p>Zabezpečujeme prepravu osôb pre jednotlivcov aj firmy. Chystáte sa na lyžovačku, vianočné trhy do historického centra Viedne,...? My Vás tam dopravíme.</p>
            </v-flex>
        </v-layout>
        <v-divider class="mt-4 mb-5"></v-divider>

        <v-layout>
            <v-flex>
                <v-list class="transparent">
                    <h3>Zabezpečujeme prepravu na podujatia ako</h3>
                    <v-layout row>
                        <v-flex xs10 offset-xs1 md4 offset-md4>
                            <v-list-tile avatar v-for="item in listItems" v-bind:key="item.title">
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
        </v-layout>
        <v-layout row class="mt-5">
            <v-flex xs10 offset-xs1 md6 offset-md3>
                <h3>Služby vodiča</h3>
            </v-flex>
        </v-layout>
        <v-layout row class="mt-4 mb-5">
            <v-flex xs10 offset-xs1 md6 offset-md3>
                <p>Naša spoločnosť ponúka pre svojich klientov aj doplnkovú službu k službe prepravy osôb a to je služba vodiča. Pokiaľ má klient k dispozícií vlastné auto, na ktorom chce, aby sa preprava zrealizovala spoločnosť zabezpečí profesionálneho vodiča, ktorý si auto vyzdvihne na určenom mieste, na tomto aute spraví prepravu zákazníka a následne auto vráti.</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: function() {
        return {
            listItems: [
                { title: 'Konferencia', icon: 'work' },
                { title: 'Firemný teambuilding', icon: 'group' },
                { title: 'Školenie zamestnancov', icon: 'school' },
                { title: 'Kongres', icon: 'account_balance' },
                { title: 'Výlety', icon: 'explore' },
                { title: 'Dovolenky', icon: 'wb_sunny' },
                { title: 'Športové podujatia', icon: 'golf_course' },
                { title: '... a mnoho iných', icon: 'mood' }

            ]
        }
    }
}
</script>

<style scoped>
.transparent {
    background-color: rgba(0, 0, 0, 0);
}
</style>
