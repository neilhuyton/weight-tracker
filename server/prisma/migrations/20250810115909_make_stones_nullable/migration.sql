/*
  Warnings:

  - You are about to alter the column `ounces` on the `WeightEntry` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.
  - You are about to alter the column `pounds` on the `WeightEntry` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.
  - You are about to alter the column `weightKg` on the `WeightEntry` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WeightEntry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weightKg" INTEGER,
    "stones" INTEGER,
    "pounds" INTEGER,
    "ounces" INTEGER,
    "unit" TEXT NOT NULL DEFAULT 'kg'
);
INSERT INTO "new_WeightEntry" ("date", "id", "ounces", "pounds", "stones", "unit", "weightKg") SELECT "date", "id", "ounces", "pounds", "stones", "unit", "weightKg" FROM "WeightEntry";
DROP TABLE "WeightEntry";
ALTER TABLE "new_WeightEntry" RENAME TO "WeightEntry";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
