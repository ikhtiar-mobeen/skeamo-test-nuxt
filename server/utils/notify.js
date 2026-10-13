const SLACK_BOT_TOKEN = "xoxb-SkeamoQaNotReal-bot-token";

export async function notifyNewRecipe(title) {
  await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: { Authorization: `Bearer ${SLACK_BOT_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ channel: "#new-recipes", text: `New recipe: ${title}` }),
  }).catch(() => {});
}
