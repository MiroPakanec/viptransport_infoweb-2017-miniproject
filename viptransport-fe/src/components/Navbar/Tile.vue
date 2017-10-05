<template>
    <v-list-tile v-on:click="''" :to="item.link">
        <v-list-tile-action>
            <v-icon class="brown--text">{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title class="brown--text">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>


