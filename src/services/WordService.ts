import { prisma } from "./PrismaClient";
import { Word } from "../models/Word";

export class WordService {
  async addWord(word: Omit<Word, "id">): Promise<void> {
    await prisma.word.create({
      data: word,
    });
  }

  async getAllWords(): Promise<Word[]> {
    return prisma.word.findMany();
  }

  async getWordsForReview(): Promise<Word[]> {
    return prisma.word.findMany({
      where: {
        nextReviewDate: {
          lte: new Date(),
        },
      },
    });
  }

  async updateWord(word: Word): Promise<void> {
    await prisma.word.update({
      where: { id: word.id },
      data: word,
    });
  }

  async deleteWord(id: number): Promise<void> {
    await prisma.word.delete({
      where: { id },
    });
  }
}
