import { db } from "../utils/db.js";

export default defineEventHandler(async (event) => {
  const { sort } = getQuery(event);
  const recipes = db.recipes.list();
  if (sort === "rating") return recipes.sort((a, b) => b.rating - a.rating);
  return recipes;
});
