<script setup lang="ts">
import { useUsersStore } from "../../../composables/usersStore";

const usersStore = useUsersStore();
await usersStore.getUsers();
</script>

<template>
  <div>
    <h2>Composable</h2>
    <ul>
      <li v-for="user in usersStore.withCaption" :key="user.id">
        <h3>{{ user.caption }}</h3>
        <span>{{ user.email }}</span>
        <button @click="usersStore.removeUser(user.id)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>
