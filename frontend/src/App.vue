<template>
  <div id="app">
      <header>
          <div class="navbar navbar-expand-lg bg-dark navbar-dark app-header">
              <div class="navbar-header">
                  <h1>{{ sitename }}</h1>
              </div>
              <div class="nav navbar-nav navbar-right cart">
                  <button type="button" class="btn btn-primary btn-lg" v-on:click="logout">
                      Logout
                  </button>
              </div>
          </div>
      </header>
      <main>
          <component :is="currentView" ></component>
      </main>
  </div>
</template>

<script>
import Authentication from "./components/Authentication.vue";
import Home from "./components/Home.vue";

export default {
    name: "App",
    data() {
        return {
            sitename: "MoodTracker",
            currentView: Authentication,
        }
    },
    components: { Authentication, Home },

  };
</script>