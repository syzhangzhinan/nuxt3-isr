export default defineNuxtConfig({
  nitro: {
    // preset: "node-server",
    // 初始预渲染一次（可让 crawler 自动发现，或手动列出）
    prerender: { routes: ["/time"] }
  },
  routeRules: {
    "/time": { isr: 3600 } // 每 120 秒允许再生一次静态产物
  },
  compatibilityDate: "2025-11-06"
})
