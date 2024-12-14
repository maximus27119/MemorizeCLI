import wordService from "../services/WordService";
import Word from "../models/Word";

export default async function promptShowStats(): Promise<void> {
  const totalWords: Word[] = await wordService.getAllWords();
  const totalWordsLength: number = totalWords.length;
  const wordsForReview: Word[] = await wordService.getWordsForReview();
  const wordsForReviewLength: number = wordsForReview.length;

  console.log(`Total amount of words: ${totalWordsLength}`);
  console.log(`Amount of words to repeat: ${wordsForReviewLength}`);
}
