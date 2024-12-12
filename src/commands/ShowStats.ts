import { WordService } from "../services/WordService";

export function showStats(wordService: WordService) {
  const totalWords = wordService.getAllWords().length;
  const wordsForReview = wordService.getWordsForReview().length;

  console.log(`Всего слов: ${totalWords}`);
  console.log(`Слов для повторения: ${wordsForReview}`);
}
