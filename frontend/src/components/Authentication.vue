<script setup lang="ts">
  import { Authenticator } from "@aws-amplify/ui-vue";

  import { Amplify } from 'aws-amplify';
  import awsconfig from '../aws-exports';

  Amplify.configure(awsconfig);

</script>

<template>
  <authenticator>
    <template v-slot:sign-up-header>
      <h2 class="amplify-heading">
        Create a new account
      </h2>
    </template>
    <template v-slot:sign-in-header>
      <h2 class="amplify-heading">
        Sign in to your account
      </h2>
    </template>
    <template v-slot="{ user, signOut }">
      {{ user }}
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut" variation="primary">Sign Out</button>
    </template>
    <template v-slot:footer>
      <div style="padding: var(--amplify-space-large); text-align: center">
        <p class="amplify-text" style="color: var(--amplify-colors-neutral-80)">
          © All Rights Reserved
        </p>
      </div>
    </template>
  </authenticator>
</template>

<script lang="ts">
 export default {
    name: "Authentication",

  }
</script>