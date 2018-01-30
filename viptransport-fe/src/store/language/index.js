export default {
    state: {
        languages: [
            { id:1, title: 'Slovak', icon: './../../../../static/language-icons/slovakia.png', isSelected: true },
            { id:2, title: 'English', icon: './../../../../static/language-icons/united-kingdom.png', isSelected: false }
        ]
    },
    mutations: {

    },
    actions: {
        selectLanguage(state, payload){
            if(payload !== parseInt(payload, 10) || payload <= 0)
                throw 'Unable to select language, becasue language id is not valid.';

            state.getters.languages.forEach(element => {
                if(element.id == payload){
                    element.isSelected = true;
                }
                else{
                    element.isSelected = false;
                }
            });
        }
    },
    getters: {
        languages(state){
            return state.languages;
        },
        selectedLanguage(state){

            var selected;
            state.languages.forEach(element => {
                if(element.isSelected){
                    selected = element;
                }
            });

            return selected;
        },
        selectedLanguageIcon(state, getters){
            var language = getters.selectedLanguage;
            return language.icon;
        }
    }
}