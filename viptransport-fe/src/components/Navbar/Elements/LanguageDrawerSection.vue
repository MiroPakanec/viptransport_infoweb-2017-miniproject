<template>
    <v-list subheader>
        <v-subheader class="brown--text">{{title}}</v-subheader>
        <v-list-tile v-for="item in languages"
                     v-bind:key="item.title"
                     @click="selectLanguage(item.id)">
            <v-list-tile-action>
                <img width="20"
                     height="20"
                     class="icon-image"
                     :src="item.icon"
                     alt="">
            </v-list-tile-action>
            <v-list-tile-content>
                <v-container class="fluid no-side-padding">
                    <v-layout class="row">
                        <v-flex xs8>
                            <v-list-tile-title class="brown--text">{{ item.title }}</v-list-tile-title>
                        </v-flex>
                        <v-flex xs2>
                            <v-icon v-if="item.id == selectedLanguageId"
                                    class="brown--text">check</v-icon>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
export default {
  computed: {
    languages: {
      get() {
        return this.$store.getters.languages;
      }
    },
    selectedLanguageId: {
      get() {
        return this.$store.getters.selectedLanguageId;
      }
    },
    title:{
      get(){
        return this.$store.getters.languageTitle;
      }
    }
  },
  methods: {
    selectLanguage(languageId) {
      this.$store.dispatch("selectLanguage", languageId);
    }
  }
};
</script>

<style>

</style>
