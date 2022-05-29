import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "@/pinia/user";

describe("User Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("login", () => {
    const user = useUserStore();
    expect(user.user.id).toBeNull();
    user.setUser({
      id: 42,
      email: "test@test.com",
    });
    expect(user.user.id).toBe(42);
    expect(user.user.email).toBe("test@test.com");
  });
  it("logout", () => {
    const user = useUserStore();
    user.setUser({
      id: 42,
      email: "test@test.com",
    });
    expect(user.user.id).toBe(42);
    expect(user.user.email).toBe("test@test.com");

    user.logout();
    expect(user.user.id).toBeNull();
  });
});
