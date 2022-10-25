-- DropForeignKey
ALTER TABLE `admins` DROP FOREIGN KEY `Admins_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_teamId_fkey`;

-- AlterTable
ALTER TABLE `admins` MODIFY `teamId` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `teamId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Teams`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admins` ADD CONSTRAINT `Admins_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Teams`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
