import { shallowMount } from "@vue/test-utils";
import UserProfile from "@/views/UserProfile.vue";
import { setActivePinia, createPinia } from "pinia";

describe("UserProfile.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(UserProfile, {
      props: { msg },
    });
    expect(wrapper.text()).toContain("login");
  });
});
