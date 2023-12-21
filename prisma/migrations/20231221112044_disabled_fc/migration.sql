-- CreateTable
CREATE TABLE `School` (
    `school_id` INTEGER NOT NULL AUTO_INCREMENT,
    `school_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`school_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certificate` (
    `certificate_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,
    `school_id` INTEGER NOT NULL,

    PRIMARY KEY (`certificate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
