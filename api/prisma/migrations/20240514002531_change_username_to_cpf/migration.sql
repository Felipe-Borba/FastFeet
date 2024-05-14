/*
  Warnings:

  - You are about to drop the column `username` on the `auth` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `Auth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Auth` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Auth_username_key` ON `auth`;

-- AlterTable
ALTER TABLE `auth` DROP COLUMN `username`,
    ADD COLUMN `cpf` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Auth_cpf_key` ON `Auth`(`cpf`);
