/*
  Warnings:

  - You are about to drop the column `excerpt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `featuredImage` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "excerpt",
DROP COLUMN "featuredImage",
ADD COLUMN     "featureImage" TEXT;
