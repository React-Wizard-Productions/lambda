import { MigrationInterface, QueryRunner } from 'typeorm';

export class attendanceDateFix1597225934260 implements MigrationInterface {
  name = 'attendanceDateFix1597225934260';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "attendance" DROP COLUMN "dateMissed"`,
    );
    await queryRunner.query(
      `ALTER TABLE "attendance" ADD "dateMissed" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "attendance" DROP COLUMN "dateMissed"`,
    );
    await queryRunner.query(
      `ALTER TABLE "attendance" ADD "dateMissed" TIMESTAMP NOT NULL`,
    );
  }
}
