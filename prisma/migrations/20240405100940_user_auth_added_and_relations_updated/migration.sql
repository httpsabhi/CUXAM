-- AddForeignKey
ALTER TABLE "Batches" ADD CONSTRAINT "Batches_BEME_fkey" FOREIGN KEY ("BEME") REFERENCES "Degree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batches" ADD CONSTRAINT "Batches_branch_fkey" FOREIGN KEY ("branch") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;