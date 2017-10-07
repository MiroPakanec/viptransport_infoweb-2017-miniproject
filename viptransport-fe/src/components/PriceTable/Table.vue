<template>
    <table>
        <thead>
            <tr>
                <th rowspan="2">#</th>
                <th rowspan="2">Z</th>
                <th rowspan="2">Do</th>
                <th colspan="2">Cena (Eur)</th>
            </tr>
            <tr>
                <th>Auto(5)</th>
                <th>Minibus(8)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Žilina</td>
                <td>Letisko Viedeň</td>
                <td>130</td>
                <td>180</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Žilina</td>
                <td>Viedeň centrum</td>
                <td>150</td>
                <td>200</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Žilina</td>
                <td>Letisko Praha</td>
                <td>200</td>
                <td>250</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Žilina</td>
                <td>Bratislava</td>
                <td>120</td>
                <td>160</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Žilina</td>
                <td>Letisko Katovice</td>
                <td>120</td>
                <td>160</td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>Žilina</td>
                <td>Letisko Krakov</td>
                <td>130</td>
                <td>180</td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>Žilina</td>
                <td>Letisko Ostrava</td>
                <td>85</td>
                <td>117</td>
            </tr>
            <tr>
                <th scope="row">8</th>
                <td colspan="2">Služby šoféra</td>
                <td colspan="2">12 EUR/ hour</td>
            </tr>
            <tr>
                <th scope="row">9</th>
                <td colspan="2">Čakanie</td>
                <td colspan="2">10 EUR/ hour</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    computed: {
        tableRows() {

        }
    }
}
</script>

<style>
table {
    width: 100%;
    font-size: 2vh;
    border: 1px solid #917d61;
}

th,
td {
    border: 1px solid #917d61;
}
</style>