import { db } from "../utils/db.js";
import { notifyNewRecipe } from "../utils/notify.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const recipe = await db.recipes.insert({
    title: body.title,
    author: body.author,
    minutes: body.minutes,
    body: body.body,
  });
  notifyNewRecipe(recipe.title);
  return recipe;
});
