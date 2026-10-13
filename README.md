# Forkful

Community recipe site — share, rate and save recipes. Built with **Nuxt 3**.

## Run it

```bash
npm install
npm run dev
```

Nuxt reads `PORT` (default 3000).

## API

| Method | Path | What it does |
|---|---|---|
| GET | `/api/recipes?sort=rating` | List recipes |
| GET | `/api/recipes/:id` | One recipe |
| POST | `/api/recipes` | Share a recipe |
| DELETE | `/api/recipes/:id` | Remove a recipe |
| POST | `/api/login` | Sign in |

---

<sub>Test fixture for Skeamo QA. It contains deliberate problems — do not deploy it.</sub>
