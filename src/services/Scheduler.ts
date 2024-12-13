import Word from "../models/Word";

class Scheduler {
  calculateNextReview(word: Word) {
    const intervalDays = [1, 2, 4, 7, 14, 30];
    const nextInterval =
      intervalDays[Math.min(word.repetitionCount, intervalDays.length - 1)];
    word.nextReviewDate = new Date(Date.now() + nextInterval * 24 * 60 * 60 * 1000);
    word.repetitionCount++;
  }
}

export default new Scheduler();
