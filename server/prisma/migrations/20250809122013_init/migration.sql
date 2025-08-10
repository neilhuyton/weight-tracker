/*
  Warnings:

  - You are about to drop the column `completed` on the `WeightEntry` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `WeightEntry` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `WeightEntry` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WeightEntry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weightKg" DECIMAL,
    "stones" INTEGER,
    "pounds" DECIMAL,
    "ounces" DECIMAL,
    "unit" TEXT NOT NULL DEFAULT 'kg'
);
INSERT INTO "new_WeightEntry" ("date", "id", "ounces", "pounds", "stones", "unit", "weightKg") SELECT "date", "id", "ounces", "pounds", "stones", "unit", "weightKg" FROM "WeightEntry";
DROP TABLE "WeightEntry";
ALTER TABLE "new_WeightEntry" RENAME TO "WeightEntry";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
