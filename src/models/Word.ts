export default interface Word {
  id: number;
  word: string;
  meaning: string;
  nextRepetitionDate: Date;
  repetitionCount: number;
}
