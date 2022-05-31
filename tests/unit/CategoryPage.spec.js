import { mount, flushPromises } from "@vue/test-utils";
// import { nextTick } from "vue";
import axios from "axios";
import CategoryPage from "@/views/CategoryPage.vue";

import { setActivePinia, createPinia } from "pinia";
// import { createTestingPinia } from "@pinia/testing";
// import { useUserStore } from "@/pinia/user";

jest.spyOn(axios, "get").mockResolvedValue([
  {
    id: 42,
    title: "Product 42",
  },
]);

describe("CategoryPage.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders CategoryPage", async () => {
    const wrapper = mount(CategoryPage);
    expect(wrapper.text()).toContain("Products");
    await flushPromises();
    expect(wrapper.text()).toContain("Product 42");
  });
});
