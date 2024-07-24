import { defineStore } from 'pinia'

type User = {
  id: number,
  first_name: string,
  last_name: string,
  email: string
}

export const useUsersStorePiniaSetup = defineStore('usersStorePiniaSetup', () => {
  const users = ref<User[]>([]);

  const withCaption = computed(() => {
    return users.value.map((user) => {
      return {
        ...user,
        caption: `${user.first_name} ${user.last_name}`
      } 
    })
  })

  async function getUsers() {
    const response = await fetch('/users.json');
    if (response.ok) {
      users.value = await response.json();
    }    
  }

  function removeUser(id: number) {
    const userIndex = users.value.findIndex((user) => user.id === id)
    users.value.splice(userIndex, 1)
  }

  return { users, withCaption, getUsers, removeUser }
});