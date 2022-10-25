/*
  Warnings:

  - You are about to alter the column `status` on the `bug` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("Bug_status")`.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("User_role")`.
  - Made the column `authorId` on table `bug` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `bug` DROP FOREIGN KEY `Bug_authorId_fkey`;

-- AlterTable
ALTER TABLE `bug` MODIFY `status` ENUM('Solved', 'High', 'Medium', 'Low') NOT NULL,
    MODIFY `authorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('User', 'Admin') NOT NULL DEFAULT 'User';

-- AddForeignKey
ALTER TABLE `Bug` ADD CONSTRAINT `Bug_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
