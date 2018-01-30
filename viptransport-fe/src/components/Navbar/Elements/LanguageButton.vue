<template>
    <v-btn class="brown--text height"
           flat>
        <v-menu offset-y
                absolute
                full-width>
            <div block
                 class="fit"
                 slot="activator">
                <v-layout>
                    <v-flex xs12>
                        <img width="20"
                             height="20"
                             class="icon-image"
                             :src="selectedIcon"
                             alt="">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-icon>arrow_drop_down</v-icon>
                    </v-flex>
                </v-layout>
            </div>
            <v-list>
                <v-list-tile v-for="item in languages"
                             :key="item.title"
                             class="tile-width-large"
                             @click="selectLanguage(item.id)"
                             :to="item.link">
                    <v-container class="fluid no-padding">
                        <v-layout class="row wrap">
                            <v-flex xs4>
                                <img width="20"
                                     height="20"
                                     class="icon-image"
                                     :src="item.icon"
                                     alt="">
                            </v-flex>
                            <v-flex xs6>
                                <v-list-tile-title class="brown--text nav-dropdown-item">{{ item.title }}</v-list-tile-title>
                            </v-flex>
                            <v-flex xs2>
                                <v-icon v-if="item.isSelected"
                                        class="brown--text">check</v-icon>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-spacer></v-spacer>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-btn>
</template>

<script>
export default {
  computed: {
    languages: {
      get() {
        return this.$store.getters.languages;
      }
    },
    selectedIcon: {
      get() {
        return this.$store.getters.selectedLanguageIcon;
      }
    }
  },
  methods:{
      selectLanguage(languageId){
          this.$store.dispatch('selectLanguage', languageId);
      }
  }
};
</script>


<style scoped>
.height {
  height: 100px;
}

.fit {
  height: 100px;
  padding-top: 40px;
  width: 100%;
}

.tile-width-large {
  width: 200px !important;
}

.no-padding {
  padding: 0 !important;
}
</style>

