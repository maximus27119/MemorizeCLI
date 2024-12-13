import inquirer from "inquirer";
import promptAddWord from "./commands/promptAddWord";
import promptReviewWords from "./commands/promptReviewWord";
import promptShowStats from "./commands/promptShowStats";

async function main(): Promise<void> {
  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Select an action:",
        choices: ["Add a word", "Repeat words", "Show stats", "Exit"]
      },
    ]);

    switch (action) {
      case "Add a word":
        await promptAddWord();
        break;

      case "Repeat words":
        await promptReviewWords();
        break;

      case "Show stats":
        await promptShowStats();
        break;

      case "Exit":
        process.exit();
    }
  }
}

main();