-- CreateTable
CREATE TABLE "Test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code1" TEXT NOT NULL,
    "code2" TEXT NOT NULL,
    "code3" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_code1_key" ON "Test"("code1");
