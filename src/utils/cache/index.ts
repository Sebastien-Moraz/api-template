import { RedisClient } from "bun";

const url = Bun.env.REDIS_URL || "redis://localhost:6379";
export const cache = new RedisClient(url);

export const getCache = async (key: string): Promise<string | null> => {
  return await cache.get(key);
};

export const setCache = async (key: string, value: string, ttlSeconds?: number): Promise<void> => {
  if (ttlSeconds) {
    await cache.set(key, value);
    await cache.expire(key, ttlSeconds);
  } else {
    await cache.set(key, value);
  }
};

export const deleteCache = async (key: string): Promise<void> => {
  await cache.del(key);
};
