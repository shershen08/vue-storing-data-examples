<template>
  <template v-if="store.loggedIn">
    <button @click="setPremium" data-test="set-premium">setPremium</button>
    <button @click="logout" data-test="logout">logout</button>
  </template>
  <button v-else @click="login(user)" data-test="login">login</button>

  <template v-if="store.loggedIn">
    <div id="user-greeting">Wellcome, {{ store.user.name }}</div>
  </template>
</template>

<script>
import { useUserStore } from "@/pinia/user";
const user = {
  id: 34,
  email: "mike@vueworkshop.org",
  name: "Mikhail",
  status: "BASIC",
};
export default {
  setup() {
    const store = useUserStore();

    const setPremium = () => {
      store.setUser({
        ...user,
        status: "PREMIUM",
      });
    };
    // eslint-disable-next-line no-unused-vars
    const unsubscribe = store.$onAction(
      ({
        name, // name of the action
        store, // store instance, same as `someStore`
        args, // array of parameters passed to the action
      }) => {
        console.log(name, store, args);
      }
    );

    return {
      user,
      login: store.setUser,
      logout: store.logout,
      setPremium,
      store,
    };
  },
};
</script>

<style></style>
