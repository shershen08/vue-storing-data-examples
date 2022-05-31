import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import { nextTick } from "vue";
// import { createTestingPinia } from "@pinia/testing";

import UserProfile from "@/views/UserProfile.vue";
import { useUserStore } from "@/pinia/user";

describe("UserProfile.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    //   wrapper = mount(UserProfile, {
    //     global: {
    //       plugins: [
    //         createTestingPinia({
    //           initialState: {
    //             user: {
    //               id: null,
    //               email: "",
    //               name: "",
    //               status: null,
    //             },
    //           },
    //         }),
    //       ],
    //     },
    //   });
  });

  it("renders UserProfile", () => {
    const wrapper = mount(UserProfile);
    expect(wrapper.text()).toContain("login");
  });

  it("logs user in", async () => {
    const store = useUserStore();
    const wrapper = mount(UserProfile);
    expect(wrapper.find("#user-greeting").exists()).toBe(false);
    wrapper.get('[data-test="login"]').trigger("click");
    await nextTick();
    expect(wrapper.find("#user-greeting").exists()).toBe(true);
    expect(wrapper.text()).toContain(store.user.name);
  });

  it("sets permium user", async () => {
    const store = useUserStore();
    const wrapper = mount(UserProfile);
    wrapper.get('[data-test="login"]').trigger("click");
    await nextTick();
    wrapper.get('[data-test="set-premium"]').trigger("click");
    await nextTick();
    expect(wrapper.find("#user-greeting").exists()).toBe(true);
    expect(wrapper.text()).toContain(store.user.name);
    expect(store.user.status).toBe("PREMIUM");
  });

  it("logs user out", async () => {
    const store = useUserStore();
    const wrapper = mount(UserProfile);
    expect(store.user.id).toBeNull();
    wrapper.get('[data-test="login"]').trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain(store.user.name);
    wrapper.get('[data-test="logout"]').trigger("click");
    expect(store.user.id).toBeNull();
  });
});
