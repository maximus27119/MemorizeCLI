import prismaClient from "./PrismaClient";
import Word from "../models/Word";
import CreateWordDto from "../models/CreateWord.dto";
import UpdateWordDto from "../models/UpdateWord.dto";

class WordService {
  async addWord(word: CreateWordDto): Promise<void> {
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
        nextRepetitionDate: {
          lte: new Date()
        }
      }
    });
  }

  async updateWord(id: number, wordDto: UpdateWordDto): Promise<void> {
    await prismaClient.word.update({
      where: { id },
      data: wordDto
    });
  }

  async deleteWord(id: number): Promise<void> {
    await prismaClient.word.delete({
      where: { id }
    });
  }
}

export default new WordService();
