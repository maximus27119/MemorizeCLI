import prismaClient from "./PrismaClient";
import Word from "../models/Word";
import WordData from "../models/WordData";

class WordService {
  async addWord(word: WordData): Promise<void> {
    await prismaClient.word.create({
      data: word
    });
  }

  async getAllWords(): Promise<Word[]> {
    return prismaClient.word.findMany();
  }

  async getWordsForReview(): Promise<Word[]> {
    return prismaClient.word.findMany({
      where: {
        nextReviewDate: {
          lte: new Date()
        }
      }
    });
  }

  async updateWord(id: number, word: WordData): Promise<void> {
    await prismaClient.word.update({
      where: { id },
      data: word
    });
  }

  async deleteWord(id: number): Promise<void> {
    await prismaClient.word.delete({
      where: { id }
    });
  }
}

export default new WordService();
