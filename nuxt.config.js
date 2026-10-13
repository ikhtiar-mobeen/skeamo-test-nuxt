export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2024-10-01",
  runtimeConfig: {
    public: {
      siteName: "Forkful",
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    },
  },
});
