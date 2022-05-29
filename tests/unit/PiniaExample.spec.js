import { shallowMount } from "@vue/test-utils";
import PiniaExample from "@/views/PiniaExample.vue";
import { setActivePinia, createPinia } from "pinia";

describe("PiniaExample.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(PiniaExample, {
      props: { msg },
    });
    expect(wrapper.text()).toContain("Shopping Cart");
  });
});
