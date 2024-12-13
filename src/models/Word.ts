export default interface Word {
  id: number;
  word: string;
  translation: string;
  meaning: string | null;
  nextReviewDate: Date;
  repetitionCount: number;
}
