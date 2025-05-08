import { Word } from "@prisma/client";

export default class UpdateWordDto {
  word?: string;
  meaning?: string;
  nextRepetitionDate?: Date;
  repetitionCount?: number;

  constructor(
    word: string,
    meaning: string,
    nextRepetitionDate: Date,
    repetitionCount: number
  ) {
    this.word = word;
    this.meaning = meaning;
    this.nextRepetitionDate = nextRepetitionDate;
    this.repetitionCount = repetitionCount;
  }

  static fromWordObject(word: Word) {
    return new UpdateWordDto(
      word.word,
      word.meaning,
      word.nextRepetitionDate,
      word.repetitionCount
    );
  }
}
