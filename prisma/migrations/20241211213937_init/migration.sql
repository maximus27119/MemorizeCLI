-- CreateTable
CREATE TABLE "Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "meaning" TEXT,
    "nextReview" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "repetitionCount" INTEGER NOT NULL DEFAULT 0
);
