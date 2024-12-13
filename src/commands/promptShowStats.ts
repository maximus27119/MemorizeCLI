import wordService from "../services/WordService";

export default async function promptShowStats(): Promise<void> {
  const totalWords = await wordService.getAllWords();
  const totalWordsLength = totalWords.length;
  const wordsForReview = await wordService.getWordsForReview();
  const wordsForReviewLength = wordsForReview.length;

  console.log(`Total amount of words: ${totalWordsLength}`);
  console.log(`Amount of words to repeat: ${wordsForReviewLength}`);
}
