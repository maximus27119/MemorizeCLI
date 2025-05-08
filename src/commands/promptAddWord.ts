import inquirer from "inquirer";
import wordService from "../services/WordService";
import CreateWordDto from "../models/CreateWord.dto";

export default async function promptAddWord(): Promise<void> {
  const { word, meaning } = await inquirer.prompt([
    { type: "input", name: "word", message: "Input a word:" },
    { type: "input", name: "meaning", message: "Input meaning:" }
  ]);

  if (word && meaning) {
    const newWord: CreateWordDto = new CreateWordDto(word, meaning);
    await wordService.addWord(newWord);
    console.log("Word was added!");
  } else {
    console.log("Error, no empty fields are allowed!");
  }
  
}
