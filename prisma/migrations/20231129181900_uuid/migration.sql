/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uid` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Link_link_key";

-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "uid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Link_uid_key" ON "Link"("uid");
