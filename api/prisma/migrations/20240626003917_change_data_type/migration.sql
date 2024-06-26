-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parcel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cep" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "codigorastreio" TEXT NOT NULL,
    "tipoEntrega" TEXT NOT NULL,
    "responsibleId" TEXT,
    "receiverId" TEXT NOT NULL,
    CONSTRAINT "Parcel_responsibleId_fkey" FOREIGN KEY ("responsibleId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Parcel_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "Recipient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Parcel" ("cep", "codigorastreio", "id", "receiverId", "responsibleId", "status", "tipoEntrega") SELECT "cep", "codigorastreio", "id", "receiverId", "responsibleId", "status", "tipoEntrega" FROM "Parcel";
DROP TABLE "Parcel";
ALTER TABLE "new_Parcel" RENAME TO "Parcel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
