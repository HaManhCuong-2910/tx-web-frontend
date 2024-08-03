import { installNuxtSiteConfig, updateSiteConfig } from "nuxt-site-config-kit";
import { defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  async setup() {
    await installNuxtSiteConfig();
    updateSiteConfig({
      url: "https://payment.dichvuhoantiennganhang.com",
      indexable: true,
    });
  },
});
