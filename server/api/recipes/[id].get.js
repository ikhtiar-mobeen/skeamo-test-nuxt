import { db } from "../../utils/db.js";

export default defineEventHandler(async (event) => {
  return db.recipes.find(getRouterParam(event, "id"));
});
