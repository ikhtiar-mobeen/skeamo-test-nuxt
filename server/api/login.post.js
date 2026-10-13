import { db } from "../utils/db.js";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);
  const user = await db.users.find(username);
  if (!user || user.password !== password) {
    throw createError({ statusCode: 401, statusMessage: "Wrong username or password" });
  }
  setCookie(event, "user", username);
  return { ok: true };
});
