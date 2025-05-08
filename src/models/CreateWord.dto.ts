export default class CreateWordDto {
  word: string;
  meaning: string;
  nextRepetitionDate: Date;
  repetitionCount: number;

  constructor(word: string, meaning: string) {
    this.word = word;
    this.meaning = meaning;
    this.nextRepetitionDate = new Date();
    this.repetitionCount = 0;
  }
}
