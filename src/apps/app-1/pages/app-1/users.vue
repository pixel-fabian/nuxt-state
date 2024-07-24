<script setup lang="ts">
import { useUsersStorePiniaOptions } from '../../stores/usersStorePiniaOptions';

    const usersStorePiniaOptions = useUsersStorePiniaOptions();
    await usersStorePiniaOptions.getUsers()
</script>

<template>
    <div>
        <h2>Users</h2>
        <ul>
            <li v-for="user in usersStorePiniaOptions.withCaption" :key="user.id">
                <h3>{{ user.caption }}</h3>
                <span>{{ user.email }}</span>
                <button @click="usersStorePiniaOptions.removeUser(user.id)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<style lang="css" scoped>

</style>