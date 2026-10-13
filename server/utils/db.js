const recipes = [
  {
    id: 1,
    title: "Lemon pasta",
    author: "maria",
    minutes: 20,
    rating: 4.5,
    body: "<p>Boil pasta. Zest <b>two</b> lemons, add butter and parmesan.</p>",
  },
  {
    id: 2,
    title: "Overnight oats",
    author: "tom",
    minutes: 5,
    rating: 4,
    body: "<p>Oats, milk, chia. Fridge overnight.</p>",
  },
];
const users = [{ id: 1, username: "maria", password: "pasta4ever" }];

export const db = {
  recipes: {
    async list() {
      return recipes;
    },
    async find(id) {
      return recipes.find((r) => r.id == id) ?? null;
    },
    async insert(row) {
      const saved = { id: recipes.length + 1, rating: 0, ...row };
      recipes.push(saved);
      return saved;
    },
    async delete(id) {
      const i = recipes.findIndex((r) => r.id == id);
      if (i >= 0) recipes.splice(i, 1);
    },
  },
  users: {
    async find(username) {
      return users.find((u) => u.username === username) ?? null;
    },
  },
};
