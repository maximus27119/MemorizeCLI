export default class WordData {
  word: string;
  translation: string;
  meaning: string | null;
  nextReviewDate: Date;
  repetitionCount: number;

  constructor(word: string, translation: string, meaning: string | null = null) {
    this.word = word;
    this.translation = translation;
    this.meaning = meaning;
    this.nextReviewDate = new Date();
    this.repetitionCount = 0;
  }
}
