-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Feedback" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "appId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "valid" INTEGER NOT NULL DEFAULT 1,
    "recordJson" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Feedback" ("appId", "createdAt", "description", "email", "id", "recordJson", "valid") SELECT "appId", "createdAt", "description", "email", "id", "recordJson", "valid" FROM "Feedback";
DROP TABLE "Feedback";
ALTER TABLE "new_Feedback" RENAME TO "Feedback";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
