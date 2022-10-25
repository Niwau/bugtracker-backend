/*
  Warnings:

  - You are about to drop the column `teamId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `team` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `bug` DROP FOREIGN KEY `Bug_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_teamId_fkey`;

-- AlterTable
ALTER TABLE `bug` MODIFY `authorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `teamId`;

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `team`;

-- AddForeignKey
ALTER TABLE `Bug` ADD CONSTRAINT `Bug_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
