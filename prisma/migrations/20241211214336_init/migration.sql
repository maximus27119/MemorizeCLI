/*
  Warnings:

  - You are about to drop the column `nextReview` on the `Word` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "meaning" TEXT,
    "nextReviewDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "repetitionCount" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Word" ("id", "meaning", "repetitionCount", "translation", "word") SELECT "id", "meaning", "repetitionCount", "translation", "word" FROM "Word";
DROP TABLE "Word";
ALTER TABLE "new_Word" RENAME TO "Word";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
