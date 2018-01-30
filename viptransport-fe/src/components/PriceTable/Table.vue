<template>
    <table class="table-text">
        <thead>
            <tr class="dark" v-if="languageId == 1">
                <th rowspan="2">Z</th>
                <th rowspan="2">Do</th>
                <th colspan="2">Cena (€)</th>
            </tr>
            <tr class="dark" v-else>
                <th rowspan="2">From</th>
                <th rowspan="2">To</th>
                <th colspan="2">Price (€)</th>
            </tr>
            <tr v-if="languageId == 1" class="dark">
                <th>Auto (5)</th>
                <th>Minibus (8)</th>
            </tr>
            <tr v-else class="dark">
                <th>Car (5)</th>
                <th>Minibus (8)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Žilina</td>
                <td v-if="languageId == 1">Letisko Viedeň</td>
                <td v-else>Vienna airport</td>
                <td>130</td>
                <td>180</td>
            </tr>
            <tr>
                <td>Žilina</td>
                <td v-if="languageId == 1">Viedeň centrum</td>
                <td v-else>Vienna city center</td>
                <td>150</td>
                <td>200</td>
            </tr>
            <tr>
                <td>Žilina</td>
                <td v-if="languageId == 1">Letisko Praha</td>
                <td v-else>Prague airport</td>                
                <td>200</td>
                <td>250</td>
            </tr>
            <tr>
                <td>Žilina</td>
                <td v-if="languageId == 1">Letisko Bratislava</td>
                <td v-else>Bratislava airport</td>                
                <td>120</td>
                <td>160</td>
            </tr>
            <tr>
                <td>Žilina</td>
                <td v-if="languageId == 1">Letisko Katovice</td>
                <td v-else>Katovice airport</td>
                <td>120</td>
                <td>160</td>
            </tr>
            <tr>
                <td>Žilina</td>
                <td v-if="languageId == 1">Letisko Kraków</td>
                <td v-else>Kraków airport</td>
                <td>130</td>
                <td>180</td>
            </tr>
            <tr>
                <td>Žilina</td>
                <td v-if="languageId == 1">Letisko Ostrava</td>
                <td v-else>Ostrava airport</td>                
                <td>85</td>
                <td>117</td>
            </tr>

            <tr v-if="languageId == 1">
                <td colspan="2">Služby šoféra</td>
                <td colspan="2">12/ hodina</td>
            </tr>
            <tr v-else>
                <td colspan="2">Driver service</td>
                <td colspan="2">12/ hour</td>
            </tr>

            <tr v-if="languageId == 1">
                <td colspan="2">Čakanie</td>
                <td colspan="2">10/ hodina</td>
            </tr>
            <tr v-else>
                <td colspan="2">Waiting time</td>
                <td colspan="2">10/ hour</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    computed: {
        languageId:{
            get(){return this.$store.getters.selectedLanguageId; }
        }
    }
}
</script>

<style>
table {
    width: 100%;
    font-size: 2vh;
    border: 1px solid #917d61;
    border-collapse: collapse;
}


.dark{
    background-color: #f7f1e8;
}

th,
td {
    border: 1px solid #917d61;
    padding: 5px;
}

.table-text {
    font-weight: bold;
}
</style>