-- CreateTable
CREATE TABLE `Parcel` (
    `id` VARCHAR(191) NOT NULL,
    `cep` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `codigorastreio` VARCHAR(191) NOT NULL,
    `tipoEntrega` ENUM('WITHDRAWAL', 'DELIVERY') NOT NULL DEFAULT 'DELIVERY',
    `responsibleId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recipient` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Parcel` ADD CONSTRAINT `Parcel_responsibleId_fkey` FOREIGN KEY (`responsibleId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
