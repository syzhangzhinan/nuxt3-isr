export default defineNuxtConfig({
  nitro: {
    // preset: "node-server",
    // 初始预渲染一次（可让 crawler 自动发现，或手动列出）
    prerender: { routes: ["/isr"] }
    // storage: {
    //   cache: { driver: "fs", base: "./.nitro/cache" } // 或平台支持的共享存储
    // }
  },
  routeRules: {
    "/isr": { isr: 120 }, // 每 120 秒允许再生一次静态产物
    "/swr": { swr: 120 }
  },
  compatibilityDate: "2025-11-06"
})
