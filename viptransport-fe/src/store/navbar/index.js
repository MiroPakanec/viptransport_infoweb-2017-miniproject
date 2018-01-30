import Language from "./../language/index";

export default {
    state:{ 
        slovakMenuItems:[
            {id: 1, icon: 'home', title: 'Domov', link: '/domov'},
            {id: 2, icon: 'euro_symbol', title: 'Cenník', link: '/cennik'},
            {id: 3, icon: 'linked_camera', title: 'Galéria', link: '/galeria'},
            {id: 4, icon: 'local_phone', title: 'Kontakt', link: '/kontakt'},
            {id: 5, icon: '', title: 'Služby', link: ''}
        ],
        englishMenuItems:[
            {id: 1, icon: 'home', title: 'Home', link: '/domov'},
            {id: 2, icon: 'euro_symbol', title: 'Prices', link: '/cennik'},
            {id: 3, icon: 'linked_camera', title: 'Gallery', link: '/galeria'},
            {id: 4, icon: 'local_phone', title: 'Contact', link: '/kontakt'},
            {id: 5, icon: '', title: 'Services', link: ''}
        ],
        slovakServices:[
            {id: 1, icon: 'favorite', title: 'Svadobná preprava', link: '/svadobna-preprava' },
            {id: 2, icon: 'local_airport', title: 'Letiskové transfery', link: '/letiskove-transfery' },
            {id: 3, icon: 'directions_car', title: 'Preprava osôb', link: '/preprava-osob' }
        ],
        englishServices:[
            {id: 1, icon: 'favorite', title: 'Wedding transports', link: '/svadobna-preprava' },
            {id: 2, icon: 'local_airport', title: 'Airport transports', link: '/letiskove-transfery' },
            {id: 3, icon: 'directions_car', title: 'Personal transports', link: '/preprava-osob' }
        ]
    },
    getters:{
        menuItems(state, getters, rootState, rootGetters){
            if(rootGetters.selectedLanguageId === 1)
                return state.slovakMenuItems;

            return state.englishMenuItems;
        },
        services(state, getters, rootState, rootGetters){
            if(rootGetters.selectedLanguageId === 1)
                return state.slovakServices;

            return state.englishServices;
        },
        languageTitle(state, getters, rootState, rootGetters){
            if(rootGetters.selectedLanguageId === 1){
                return "Zvoľte si jazyk";
            }

            return "Choose a language";
        },
        serviceTitle(state, getters, rootState, rootGetters){
            if(rootGetters.selectedLanguageId === 1){
                return "Čo ponúkame";
            }

            return "Our services";
        }
    }
}