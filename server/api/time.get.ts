export default defineEventHandler(() => {
  const now = new Date().toLocaleString()
  console.log("⌛ ISR executed at", now)
  return {
    time: now
  }
})
