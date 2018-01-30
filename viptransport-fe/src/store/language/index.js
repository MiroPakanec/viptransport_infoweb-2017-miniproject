export default {
    state: {
        selectedLanguageId: 1,
        slovakLanguageTitles:[
            { id:1, title: 'Slovenský', icon: './../../../../static/language-icons/slovakia.png'},
            { id:2, title: 'Anglický', icon: './../../../../static/language-icons/united-kingdom.png'}
        ],
        englishLanguageTitles:[
            { id:1, title: 'Slovak', icon: './../../../../static/language-icons/slovakia.png'},
            { id:2, title: 'English', icon: './../../../../static/language-icons/united-kingdom.png'}
        ]
    },
    mutations: {
        setSelectedLanguageId(state, payload){
            state.selectedLanguageId = payload;
        }
    },
    actions: {
        selectLanguage(state, payload){
            if(payload !== parseInt(payload, 10) || payload <= 0)
                throw 'Unable to select language, becasue language id is not valid.';

            state.commit('setSelectedLanguageId', payload);
        }
    },
    getters: {
        languages(state){
            if(state.selectedLanguageId == 1){
                return state.slovakLanguageTitles;
            }

            return state.englishLanguageTitles;
        },
        slovakLanguageTitles(state){
            return state.slovakLanguageTitles;
        },
        englishLanguageTitles(state){
            return state.englishLanguageTitles;
        },
        selectedLanguage(state){

            var selected;

            if(state.selectedLanguageId == 1){
                state.slovakLanguageTitles.forEach(element => {
                    if(element.id == state.selectedLanguageId){
                        selected = element;
                    }
                });

                return selected
            }

            state.englishLanguageTitles.forEach(element => {
                if(element.id == state.selectedLanguageId){
                    selected = element;
                }
            });

            return selected;
        },
        selectedLanguageIcon(state, getters){
            var language = getters.selectedLanguage;

            return language.icon;
        },
        selectedLanguageId(state){
            return state.selectedLanguageId;
        }
    }
}