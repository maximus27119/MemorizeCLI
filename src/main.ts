import inquirer from "inquirer";
import { WordService } from "./services/WordService";
import { addWord } from "./commands/AddWord";
import { reviewWords } from "./commands/ReviewWord";
import { showStats } from "./commands/ShowStats";

const wordService = new WordService();

async function main() {
  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Выберите действие:",
        choices: ["Добавить слово", "Повторить слова", "Показать статистику", "Выйти"],
      },
    ]);

    switch (action) {
      case "Добавить слово":
        await addWord(wordService);
        break;

      case "Повторить слова":
        await reviewWords(wordService);
        break;

      case "Показать статистику":
        showStats(wordService);
        break;

      case "Выйти":
        process.exit();
    }
  }
}

main();
