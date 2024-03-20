<template>
    <div id="app">
        <header>
            <div class="navbar navbar-expand-lg bg-dark navbar-dark app-header">
                <div class="navbar-header">
                    <h1>{{ sitename }}</h1>
                </div>
                <div class="nav navbar-nav navbar-right logout">
                    <button type="button" class="btn btn-primary btn-lg" v-on:click="logout">
                        Logout
                    </button>
                </div>
            </div>
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

export default {
    name: "App",
    data() {
        return {
            sitename: "MoodTracker",
            session:null,
            //currentView:Authentication,
        }
    },
    components: { Authentication, Home },
    methods :{
        logout() {
            auth.signOut();
        },
        async getSession() {
            this.session = (await fetchAuthSession());
            this.currentView = this.session.tokens.idToken ? Home : Authentication;
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