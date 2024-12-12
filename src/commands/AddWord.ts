import inquirer from "inquirer";
import { Word } from "../models/Word";
import { WordService } from "../services/WordService";

export async function addWord(wordService: WordService) {
  const { word, translation, meaning } = await inquirer.prompt([
    { type: "input", name: "word", message: "Введите слово:" },
    { type: "input", name: "translation", message: "Введите перевод:" },
    { type: "input", name: "meaning", message: "Введите значение (опционально):" },
  ]);

  const newWord = new Word(word, translation, meaning);
  await wordService.addWord(newWord);
  console.log("Слово добавлено!");
}
