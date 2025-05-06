-- CreateTable
CREATE TABLE "Group" (
    "pin" TEXT NOT NULL PRIMARY KEY,
    "isActive" TEXT
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "groupPin" TEXT NOT NULL,
    CONSTRAINT "User_groupPin_fkey" FOREIGN KEY ("groupPin") REFERENCES "Group" ("pin") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserToken" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    CONSTRAINT "UserToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bet" (
    "bet_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isClosed" BOOLEAN NOT NULL,
    "userUser_id" TEXT NOT NULL,
    CONSTRAINT "Bet_userUser_id_fkey" FOREIGN KEY ("userUser_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Choice" (
    "choice_id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "winningChoice" BOOLEAN NOT NULL DEFAULT false,
    "bet_id" TEXT NOT NULL,
    CONSTRAINT "Choice_bet_id_fkey" FOREIGN KEY ("bet_id") REFERENCES "Bet" ("bet_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BetStake" (
    "user_id" TEXT NOT NULL,
    "choice_id" TEXT NOT NULL,
    "bet_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    PRIMARY KEY ("user_id", "bet_id", "choice_id"),
    CONSTRAINT "BetStake_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BetStake_bet_id_fkey" FOREIGN KEY ("bet_id") REFERENCES "Bet" ("bet_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BetStake_choice_id_fkey" FOREIGN KEY ("choice_id") REFERENCES "Choice" ("choice_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_groupPin_key" ON "User"("groupPin");

-- CreateIndex
CREATE UNIQUE INDEX "UserToken_token_key" ON "UserToken"("token");
