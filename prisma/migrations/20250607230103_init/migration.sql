-- CreateTable
CREATE TABLE "Pilot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "callsign" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "cid" INTEGER NOT NULL,
    "vid" INTEGER NOT NULL,
    "homeAirport" TEXT NOT NULL,
    "registrationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating" INTEGER NOT NULL,
    "flights" INTEGER NOT NULL,
    "hours" REAL NOT NULL,
    "rvr" INTEGER NOT NULL,
    "lastFlight" DATETIME NOT NULL,
    "currentPosition" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
