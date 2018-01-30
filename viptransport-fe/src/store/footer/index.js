export default {
    getters: {
        socialMediaTitle(state, getters, rootState, rootGetters) {
            if (rootGetters.selectedLanguageId === 1) {
                return "Sociálne siete";
            }

            return "Social media";
        },
        transportationRulesTitle(state, getters, rootState, rootGetters){
            if (rootGetters.selectedLanguageId === 1) {
                return "Prepravný poriadok";
            }                

            return "Transportation rules";
        },
        contactTitle(state, getters, rootState, rootGetters){
            if (rootGetters.selectedLanguageId === 1) {
                return "Kontakt"
            }

            return "Contact";
        },
        socialMediaContent(state, getters, rootState, rootGetters){
            if (rootGetters.selectedLanguageId === 1) {
                return 'Sledujte aktuálne dianie v našej spoločnosti.<br> Sme na' +
                '<a href="https://www.facebook.com/viptransport.sk/" target="blank">Facebook</a> -u.';
            }

            return 'Follow our company on <a href="https://www.facebook.com/viptransport.sk/" target="blank">Facebook</a>.';
        },
        transportationRulesContent(state, getters, rootState, rootGetters){
            if (rootGetters.selectedLanguageId === 1) {
                return 'Prepravný poriadok spoločnosti VIP transport, s.r.o. nájdete '+
                '<a href="../../static/documents/prepravnyporiadok.pdf" target="blank">TU</a>.';
            }

            return 'All the necessary rules regarding transportation with VIP transport, s.r.o. can be found ' +
            '<a href="../../static/documents/prepravnyporiadok.pdf" target="blank">HERE</a>.'
        },
        contactContent(state, getters, rootState, rootGetters){

            return 'VIP transport s.r.o. <br> Gemerská 4, 01008, Žilina<br> IČO: 46304959<br> DIČ: 2023323511' +
            '<br> <a href="mailto:info@viptransport.sk">Mail: info@viptransport.sk</a><br>' +
            '<a href="tel:+421 911 301 111">Tel.: +421 911 301 111</a>';
        }
    }
}