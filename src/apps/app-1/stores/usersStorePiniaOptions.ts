import { defineStore } from 'pinia'

export type User = {
  id: number,
  first_name: string,
  last_name: string,
  email: string
}

type State = {
  users: User[];
};

export const useUsersStorePiniaOptions = defineStore('usersStorePiniaOptions', {
  state: (): State => ({
    users: [],
  }),
  getters: {
    withCaption: (state) => state.users.map((user) => {
      return {
        ...user,
        caption: `${user.first_name} ${user.last_name}`
      } 
    })
  },
  actions: {
    async getUsers() {
      const response = await fetch('/users.json');
      if (response.ok) {
        this.users = await response.json();
      }    
    },
    removeUser(id: number) {
      const userIndex = this.users.findIndex((user) => user.id === id)
      this.users.splice(userIndex, 1)
    }
  },
})