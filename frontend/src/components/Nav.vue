<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark app-header">
                <div>
                    <ul class="navbar-nav nav-menu-toggle">
                        <li class="nav-item">
                            <button id="open-btn" class="nav-menu-btn" @click="openNav">&#9776;</button>
                            <button id="close-btn" class="nav-menu-btn close-btn-hide" @click="closeNav">X</button>
                        </li>
                    </ul>

                </div>
                <div class="navbar-header app-title">
                    <p>{{ sitename }}</p>
                </div>
                <div class="navbar-right logout">
                    <button type="button" class="btn btn-primary btn-lg" v-on:click="logout">
                        Logout
                    </button>
                </div>
        </nav>
        <!-- sidebar links -->
        <div id="mood-tracker-sidebar" class="sidebar">
            <a href="#" @click="changePage('Home')">Home</a>
            <a href="#" @click="changePage('MoodHistory')">Mood History</a>
            <a href="#" @click="changePage('Settings')">Settings</a>
            <a href="#" @click="changePage('Profile')">My Profile</a>
            <a href="#" @click="changePage('Logout')">Logout</a>
        </div>
    </div>
</template>

<script>
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
const auth = useAuthenticator();

export default {
    name: "Nav",
    data() {
        return {
            sitename: "MoodTracker",
            session: null
        }
    },
    methods: {
        openNav() {
            document.getElementById("mood-tracker-sidebar").style.width = "250px";
            document.getElementById("close-btn").style.display = "inline";
            document.getElementById("open-btn").style.display = "none";
        },
        closeNav() {
            document.getElementById("mood-tracker-sidebar").style.width = "0";
            document.getElementById("open-btn").style.display = "inline";
            document.getElementById("close-btn").style.display = "none";
        },
        changePage(page){
            this.$emit("change-page", page);
            this.closeNav();
        },
        logout() {
            auth.signOut();
        },
    },
}
</script>