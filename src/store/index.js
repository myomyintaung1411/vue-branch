import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        api_url: "http://localhost:3000/",
        isAuthenticated: false,
        feed: [{
                id: 0,
                display_name: 'Fred Flinsten',
                user_id: 0,
                desc: "Look at my car...",
                image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                timestamp: 1551052800000
            },
            {
                id: 1,
                display_name: 'Scooby Doo',
                user_id: 1,
                desc: "Pizza...",
                image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                timestamp: 1549065600000
            },
            {
                id: 2,
                display_name: 'Goku Son',
                user_id: 2,
                desc: "fuckkk..",
                image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                timestamp: 1551052800000
            }
        ]
    },
    mutations: {
        isAuthenticated(state) {
            if (localStorage.getItem('jwt') != null) {
                state.isAuthenticated = true;
            } else {
                state.isAuthenticated = false;
            }
        },
        login(state, token) {
            state.isAuthenticated = true;
            localStorage.setItem("jwt", token);
            this.$router.push("/home");
        },
        logout(state) {
            state.isAuthenticated = false;
            localStorage.removeItem("jwt");
            this.$router.push("/login");
        }
    },
    actions: {},
    modules: {}
});