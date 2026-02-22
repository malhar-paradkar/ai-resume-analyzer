import Redis from "ioredis";

if (!process.env.REDIS_URL) {
  console.error("❌ REDIS_URL is missing in environment variables");
}

const redis = new Redis(process.env.REDIS_URL, {
  tls: {},
});

redis.on("connect", () => {
  console.log("✅ Redis connected");
});

redis.on("ready", () => {
  console.log("🚀 Redis ready");
});

redis.on("error", (err) => {
  console.error("❌ Redis error:", err.message);
});

export default redis;
console.log("REDIS_URL:", process.env.REDIS_URL);