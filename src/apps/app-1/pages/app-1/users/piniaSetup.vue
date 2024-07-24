<script setup lang="ts">
import { useUsersStorePiniaSetup } from "../../../stores/usersStorePiniaSetup";

const usersStorePiniaSetup = useUsersStorePiniaSetup();
await usersStorePiniaSetup.getUsers();
</script>

<template>
  <div>
    <h2>Pinia (Setup Syntax)</h2>
    <ul>
      <li v-for="user in usersStorePiniaSetup.withCaption" :key="user.id">
        <h3>{{ user.caption }}</h3>
        <span>{{ user.email }}</span>
        <button @click="usersStorePiniaSetup.removeUser(user.id)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>
