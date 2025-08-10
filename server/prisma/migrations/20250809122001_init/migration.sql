-- CreateTable
CREATE TABLE "WeightEntry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weightKg" DECIMAL,
    "stones" INTEGER,
    "pounds" DECIMAL,
    "ounces" DECIMAL,
    "unit" TEXT NOT NULL DEFAULT 'kg'
);
