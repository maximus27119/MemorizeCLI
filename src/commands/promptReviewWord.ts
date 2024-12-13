import inquirer from "inquirer";
import wordService from "../services/WordService";
import scheduler from "../services/Scheduler";
import Word from "../models/Word";

export default async function reviewWords(): Promise<void> {
  const words: Word[] = await wordService.getWordsForReview();

  if (words.length === 0) {
    console.log("There are no words to repeat.");
    return;
  }

  for (const word of words) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: `Word: ${word.word}. What do you want to do?`,
        choices: ["Show translation", "Delete", "Reschedule to the next day", "Skip"]
      }
    ]);

    switch (action) {
      case "Show translation":
        // prettier-ignore
        console.log(`Translation: ${word.translation}, Meaning: ${word.meaning}`);
        break;

      case "Delete":
        await wordService.deleteWord(word.id);
        console.log("Word was removed!");
        break;

      case "Reschedule for the next day":
        scheduler.calculateNextReview(word);
        await wordService.updateWord(word.id, word);
        console.log("Rescheduled for the next day!");
        break;

      default:
        console.log("Skipped.");
    }
  }
}
