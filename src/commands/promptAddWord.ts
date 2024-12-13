import inquirer from "inquirer";
import wordService from "../services/WordService";
import WordData from "../models/WordData";

export default async function promptAddWord(): Promise<void> {
  const { word, translation, meaning } = await inquirer.prompt([
    { type: "input", name: "word", message: "Input a word:" },
    { type: "input", name: "translation", message: "Input translation:" },
    { type: "input", name: "meaning", message: "Input meaning (optional):" },
  ]);

  const newWord: WordData = new WordData(word, translation, meaning);
  await wordService.addWord(newWord);
  console.log("Слово добавлено!");
}
