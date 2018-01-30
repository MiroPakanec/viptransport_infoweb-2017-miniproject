export default {
    state:{
        listItemsSlovak:[
            { id:1, title: "Konferencia", icon: "work" },
            { id:2, title: "Firemný teambuilding", icon: "group" },
            { id:3, title: "Školenie zamestnancov", icon: "school" },
            { id:4, title: "Kongres", icon: "account_balance" },
            { id:5, title: "Výlety", icon: "explore" },
            { id:6, title: "Dovolenky", icon: "wb_sunny" },
            { id:7, title: "Športové podujatia", icon: "golf_course" },
            { id:8, title: "...kedykoľvek a kamkoľvek", icon: "mood" }
        ],
        listItemEnglish:[
            { id:1, title: "Conference", icon: "work" },
            { id:2, title: "Company teambuilding", icon: "group" },
            { id:3, title: "Employee training", icon: "school" },
            { id:4, title: "Congress", icon: "account_balance" },
            { id:5, title: "Trips", icon: "explore" },
            { id:6, title: "Holidays", icon: "wb_sunny" },
            { id:7, title: "Sports events", icon: "golf_course" },
            { id:8, title: "...or anywhere else?", icon: "mood" }
        ]
    },
    getters:{
        listItems(state, getters, rootState, rootGetters){
            if (rootGetters.selectedLanguageId === 1) {
                return state.listItemsSlovak;
            }

            return state.listItemEnglish;
        }
    }
}