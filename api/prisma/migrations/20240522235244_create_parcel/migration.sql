-- CreateTable
CREATE TABLE `Parcel` (
    `id` VARCHAR(191) NOT NULL,
    `cep` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `codigorastreio` VARCHAR(191) NOT NULL,
    `tipoEntrega` ENUM('WITHDRAWAL', 'DELIVERY') NOT NULL DEFAULT 'DELIVERY',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
