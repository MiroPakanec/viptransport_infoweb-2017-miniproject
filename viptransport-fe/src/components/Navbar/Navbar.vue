<template>
    <div>
        <v-navigation-drawer temporary v-model="sideNav">
            <v-list>
                <nav-tile :item="menuItems[0]"></nav-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list subheader>
                <v-subheader class="brown--text">Čo ponúkame</v-subheader>
                <v-list-tile v-for="item in services" v-bind:key="item.title" :to="item.link" @click="''">
                    <v-list-tile-action>
                        <v-icon class="brown--text">{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="brown--text">{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
                <nav-tile :item="menuItems[1]"></nav-tile>
                <nav-tile :item="menuItems[2]"></nav-tile>
                <nav-tile :item="menuItems[3]"></nav-tile>
            </v-list>
            <v-divider></v-divider>
            <drawer-section-language></drawer-section-language>
        </v-navigation-drawer>

        <v-toolbar dark class="white height">
            <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-md-and-up brown--text nav-header"></v-toolbar-side-icon>
            <v-toolbar-title class="nav-header">
                <v-btn fab flat class="height btn-logo" to="/"></v-btn>
                <router-link class="brown--text" text-xs-center to="/" tag="span" style="cursor: pointer">
                    VIP Transport
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn class="brown--text height" block flat to="/domov">Domov</v-btn>

                <v-btn class="brown--text height" flat>
                    <v-menu class="" offset-y absolute full-width>
                        <div block class="fit" slot="activator">
                            <v-layout row>
                                <v-flex xs12>
                                    {{ menuItems[4].title }}
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-icon>arrow_drop_down</v-icon>
                                </v-flex>
                            </v-layout>
                        </div>
                        <v-list>
                            <v-list-tile v-for="item in services" :key="item.title" @click="''" :to="item.link">
                                <v-list-tile-title class="brown--text nav-dropdown-item">{{ item.title }}</v-list-tile-title>
                                <v-spacer></v-spacer>
                                <v-icon class="brown--text" left>{{ item.icon }}</v-icon>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </v-btn>

                <v-btn class="brown--text height" flat :to="menuItems[1].link">{{ menuItems[1].title }}</v-btn>
                <v-btn class="brown--text height" flat :to="menuItems[2].link">{{ menuItems[2].title }}</v-btn>
                <v-btn class="brown--text height" flat :to="menuItems[3].link">{{ menuItems[3].title }}</v-btn>
                <nav-bnt-language></nav-bnt-language>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
import NavTile from './Tile';
import NavLanguageButton from './Elements/LanguageButton';
import DrawerLanguageSection from './Elements/LanguageDrawerSection';

export default {
    components: {
        'nav-tile': NavTile,
        'nav-bnt-language': NavLanguageButton,
        'drawer-section-language': DrawerLanguageSection
    },
    data() {
        return {
            dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
            sideNav: false           
        }
    },
    computed: {

        menuItems() {
            let menuItems = [
                { icon: 'home', title: 'Domov', link: '/domov', subItems: [] },
                { icon: 'euro_symbol', title: 'Cenník', link: '/cennik', subItems: [] },
                { icon: 'linked_camera', title: 'Galéria', link: '/galeria', subItems: [] },
                { icon: 'local_phone', title: 'Kontakt', link: '/kontakt', subItems: [] },
                { icon: '', title: 'Služby', link: '', subItems: this.services},
                { icon: 'phone', title: 'Jazyk', link: '', subItems: this.services}
            ];

            return menuItems;
        },
        services() {
            let items = [
                { icon: 'favorite', title: 'Svadobná preprava', link: '/svadobna-preprava' },
                { icon: 'local_airport', title: 'Letiskové transfery', link: '/letiskove-transfery' },
                { icon: 'directions_car', title: 'Preprava osôb', link: '/preprava-osob' }
            ];

            return items;
        }
    }   
}
</script>

<style scoped>
.nav-dropdown-item {
    width: 180px;
}

.height {
    height: 100px;
}

img {
    max-width: 95%;
    max-height: 95%;
    background-size: contain
}

.btn-logo {

    height: 95px;
    width: 95px;
    margin-top: 2.5px;
    margin-left: 10px;

    background: url('../../assets/logo_f_2.png');
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
}

.btn-logo:hover {
    background: url('../../assets/logo_f_1.png');
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
}

.nav-header {
    margin-top: 40px;
}

.fit {
    height: 100px;
    padding-top: 40px;
    width: 100%;
}
</style>