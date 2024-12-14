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

  for (let i = 0; i < words.length;) {
    const currentWord = words[i];
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: `Word: ${currentWord.word}. What do you want to do?`,
        choices: ["Show translation", "Delete", "Reschedule for the next day", "Skip"]
      }
    ]);

    switch (action) {
      case "Show translation":
        // prettier-ignore
        console.log(`Translation: ${currentWord.translation}, Meaning: ${currentWord.meaning}`);
        break;

      case "Delete":
        await wordService.deleteWord(currentWord.id);
        console.log("Word was removed!");
        i++;
        break;

      case "Reschedule for the next day":
        scheduler.calculateNextReview(currentWord);
        await wordService.updateWord(currentWord.id, currentWord);
        console.log("Rescheduled for the next day!");
        i++;
        break;

      default:
        console.log("Skipped.");
        i++;
    }
  }
}
