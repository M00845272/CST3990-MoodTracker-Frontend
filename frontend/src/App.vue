<template>
    <div id="app">
        <header>
            <Nav></Nav>
        </header>
        <main class="main">
            <component :is="currentView"></component>
        </main>
    </div>
</template>

<script>
import { toRefs } from 'vue';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
const { route, user, signOut } = toRefs(useAuthenticator());
import { fetchAuthSession } from 'aws-amplify/auth'


Amplify.configure(awsconfig);

const auth = useAuthenticator();

import Authentication from "./components/Authentication.vue";
import Home from "./components/Home.vue";
import Nav from "./components/Nav.vue";

export default {
    name: "App",
    data() {
        return {
            session:null,
            //currentView:Authentication,
        }
    },
    components: { Nav, Authentication, Home },
    methods :{
        logout() {
            auth.signOut();
        },
        async getSession() {
            try{
                this.session = (await fetchAuthSession());
                this.currentView = this.session.tokens.idToken ? Home : Authentication;
            }catch(e) {
                this.currentView = Authentication;
            }
           
            
            this.$forceUpdate();
        },
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