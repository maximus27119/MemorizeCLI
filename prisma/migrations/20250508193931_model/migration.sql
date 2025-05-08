/*
  Warnings:

  - You are about to drop the column `nextReviewDate` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `translation` on the `Word` table. All the data in the column will be lost.
  - Made the column `meaning` on table `Word` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "nextRepetitionDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "repetitionCount" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Word" ("id", "meaning", "repetitionCount", "word") SELECT "id", "meaning", "repetitionCount", "word" FROM "Word";
DROP TABLE "Word";
ALTER TABLE "new_Word" RENAME TO "Word";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
