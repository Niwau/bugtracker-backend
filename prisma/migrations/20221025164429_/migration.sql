-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_teamId_fkey";

-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "teamId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
