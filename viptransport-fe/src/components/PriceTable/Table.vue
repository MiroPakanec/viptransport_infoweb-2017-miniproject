<template>
    <table>
        <thead>
            <tr>
                <th rowspan="2">#</th>
                <th rowspan="2">From</th>
                <th rowspan="2">To</th>
                <th colspan="2">Price</th>
            </tr>
            <tr>
                <th>Car(5)</th>
                <th>Minibus(8)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Žilina</td>
                <td>Vienna airport</td>
                <td>130</td>
                <td>180</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Žilina</td>
                <td>Vienna center</td>
                <td>150</td>
                <td>200</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Žilina</td>
                <td>Prague airport</td>
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
                <td>Frýdek Místek</td>
                <td>75</td>
                <td>110</td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>Žilina</td>
                <td>Nošovice</td>
                <td>75</td>
                <td>110</td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>Žilina</td>
                <td>Ostrava</td>
                <td>85</td>
                <td>117</td>
            </tr>
            <tr>
                <th scope="row">8</th>
                <td colspan="2">Transporter service</td>
                <td colspan="2">7 EUR/ hour</td>
            </tr>
            <tr>
                <th scope="row">9</th>
                <td colspan="2">Waiting time</td>
                <td colspan="2">5 EUR/ hour</td>
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

th, td {
    border: 1px solid #917d61;
}
</style>