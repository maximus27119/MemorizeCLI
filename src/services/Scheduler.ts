import Word from "../models/Word";

class Scheduler {
  scheduleNextReview(word: Word) {
    const intervalDays = [1, 2, 4, 7, 14, 30];

    const nextInterval =
      intervalDays[Math.min(word.repetitionCount, intervalDays.length - 1)];


    const updatedDate = new Date(Date.now() + nextInterval * 24 * 60 * 60 * 1000);

    word.nextRepetitionDate = updatedDate;

    word.repetitionCount++;
  }
}

export default new Scheduler();
