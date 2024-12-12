import inquirer from "inquirer";
import { WordService } from "../services/WordService";
import { Scheduler } from "../services/Scheduler";

export async function reviewWords(wordService: WordService) {
  const words = await wordService.getWordsForReview();

  if (words.length === 0) {
    console.log("Нет слов для повторения!");
    return;
  }

  for (const word of words) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: `Слово: ${word.word}. Что вы хотите сделать?`,
        choices: [
          "Показать перевод",
          "Удалить",
          "Запланировать на следующий день",
          "Пропустить",
        ],
      },
    ]);

    switch (action) {
      case "Показать перевод":
        console.log(`Перевод: ${word.translation}, Значение: ${word.meaning}`);
        break;

      case "Удалить":
        await wordService.deleteWord(word.id);
        console.log("Слово удалено!");
        break;

      case "Запланировать на следующий день":
        Scheduler.calculateNextReview(word);
        await wordService.updateWord(word);
        console.log("Запланировано на следующий день!");
        break;

      default:
        console.log("Пропущено.");
    }
  }
}
