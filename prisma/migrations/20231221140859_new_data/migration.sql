/*
  Warnings:

  - You are about to drop the `_CertificateToSchool` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `_CertificateToSchool`;

-- CreateIndex
CREATE INDEX `Certificate_school_id_idx` ON `Certificate`(`school_id`);
