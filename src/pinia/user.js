import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      id: null,
      email: "",
      name: "",
      status: null,
    },
  }),
  actions: {
    setUser(data) {
      this.user = data;
    },
    logout() {
      this.$reset();
      // this.user = {};
    },
  },
  getters: {
    loggedIn() {
      return this.user.id;
    },
    userStatus() {
      return this.user ? this.user.status : null;
    },
  },
});

// export function myPiniaPlugin(context) {
//   console.log("User store chaged: ", context.store);
// }
