<template>
    <div id="app">
        <header>
            <Nav @change-page="changePage"></Nav>
        </header>
        <main class="main">
            <Home  v-if="currentView=='Home'"></Home>
            <Authentication  v-if="currentView=='Authentication'"></Authentication>
            <MoodHistory  v-if="currentView=='MoodHistory'"></MoodHistory>
        </main>
    </div>
</template>

<script>
import { toRefs } from 'vue';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
const { route, user, signOut } = toRefs(useAuthenticator());
import { fetchAuthSession } from 'aws-amplify/auth';

Amplify.configure(awsconfig);

const auth = useAuthenticator();

import Authentication from "./components/Authentication.vue";
import Home from "./components/Home.vue";
import Nav from "./components/Nav.vue";
import MoodHistory from "./components/MoodHistory.vue";

export default {
    name: "App",
    data() {
        return {
            session:null,
            currentView:'',
        }
    },
    components: { Nav, Authentication, Home, MoodHistory },
    methods :{
        async getSession() {
            try{
                this.session = (await fetchAuthSession());
                this.currentView = this.session.tokens.idToken ? 'Home' : 'Authentication';
            }catch(e) {
                this.currentView = 'Authentication';
            }
            this.$forceUpdate();
        },
        changePage(page){
            this.currentView = page;

        }
    },
    computed: {
       // currentView() {    
           // this.session = (await fetchAuthSession());
           // this.currentView = this.session? this.session.tokens.idToken? Home : Authentication: Authentication;
       // }
    },
    async created () {
       this.getSession();
    }
};
</script>