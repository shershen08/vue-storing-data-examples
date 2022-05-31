import { mount } from "@vue/test-utils";
// import { nextTick } from "vue";
import CategoryPage from "@/views/CategoryPage.vue";

import { setActivePinia, createPinia } from "pinia";
// import { createTestingPinia } from "@pinia/testing";
// import { useUserStore } from "@/pinia/user";

describe("CategoryPage.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders CategoryPage", () => {
    const wrapper = mount(CategoryPage);
    expect(wrapper.text()).toContain("Products");
  });
});
