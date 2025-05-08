import inquirer from "inquirer";
import promptAddWord from "./promptAddWord";
import promptReviewWords from "./promptReviewWord";
import promptShowStats from "./promptShowStats";

export default async function promptStartApp(): Promise<void> {
  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Select an action:",
        choices: ["Add a word", "Repeat words", "Show stats", "Exit"]
      }
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
