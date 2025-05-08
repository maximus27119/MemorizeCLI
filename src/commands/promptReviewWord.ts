import inquirer from "inquirer";
import wordService from "../services/WordService";
import scheduler from "../services/Scheduler";
import Word from "../models/Word";
import UpdateWordDto from "../models/UpdateWord.dto";
import { TestChoices } from "../types/testChoices";

export default async function reviewWords(): Promise<void> {
  const words: Word[] = await wordService.getWordsForReview();

  const testChoices: TestChoices = {
    meaning: "Show meaning",
    delete: "Delete",
    reschedule: "Reschedule for the next day",
    showNextRepetitionDate: "Show next repetition date",
    skip: "Skip"
  };

  if (words.length === 0) {
    console.log("There are no words to repeat.");
    return;
  }

  for (let i = 0; i < words.length;) {
    const currentWord = words[i];
    const questions = [{
      type: "list" as const,
      name: "action",
      message: `Word: ${currentWord.word}. What do you want to do?`,
      choices: Object.values(testChoices)
    }];
    
    const { action } = await inquirer.prompt(questions);

    switch (action) {
      case testChoices.meaning:
        // prettier-ignore
        console.log(`Meaning: ${currentWord.meaning}`);
        break;

      case testChoices.delete:
        await wordService.deleteWord(currentWord.id);
        console.log("Word was removed!");
        i++;
        break;

      case testChoices.showNextRepetitionDate:
        console.log(currentWord);
        break;

      case testChoices.reschedule:
        scheduler.scheduleNextReview(currentWord);
        const wordDto: UpdateWordDto = UpdateWordDto.fromWordObject(currentWord);
        await wordService.updateWord(currentWord.id, wordDto);
        console.log("Rescheduled for the next day!");
        i++;
        break;

      default:
        console.log("Skipped.");
        i++;
    }
  }
}
