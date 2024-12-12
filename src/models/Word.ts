export class Word {
  id?: number;
  word: string;
  translation: string;
  meaning: string | null;
  nextReviewDate: Date;
  repetitionCount: number;

  constructor(word: string, translation: string, meaning?: string) {
    this.word = word;
    this.translation = translation;
    this.meaning = meaning ?? null;
    this.nextReviewDate = new Date();
    this.repetitionCount = 0;
  }
}
