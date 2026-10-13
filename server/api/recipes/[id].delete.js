import { db } from "../../utils/db.js";

export default defineEventHandler(async (event) => {
  await db.recipes.delete(getRouterParam(event, "id"));
  return { ok: true };
});
