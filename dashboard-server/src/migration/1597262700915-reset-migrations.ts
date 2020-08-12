import { MigrationInterface, QueryRunner } from 'typeorm';

export class resetMigrations1597262700915 implements MigrationInterface {
  name = 'resetMigrations1597262700915';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "notes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "notes" character varying NOT NULL, "isArchived" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "studentId" uuid, CONSTRAINT "PK_af6206538ea96c4e77e9f400c3d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "teamleads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "github" character varying, "weekend" character varying, CONSTRAINT "PK_42d4871e87ece8a6d6fc0283779" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "groups" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" character varying NOT NULL DEFAULT 'main', CONSTRAINT "PK_659d1483316afb28afd3a90646e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "students" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "github" character varying, "weekend" character varying, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "attendance" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "reason" character varying, "dateMissed" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "studentId" uuid, CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "groups_students_students" ("groupsId" uuid NOT NULL, "studentsId" uuid NOT NULL, CONSTRAINT "PK_c826388d388d9baa2bda57ba2eb" PRIMARY KEY ("groupsId", "studentsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0a13c314755635e495546b352b" ON "groups_students_students" ("groupsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_07a78939b3255e9dc14e344a00" ON "groups_students_students" ("studentsId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "groups_team_leads_teamleads" ("groupsId" uuid NOT NULL, "teamleadsId" uuid NOT NULL, CONSTRAINT "PK_afc5aebd75e0bfdb207e698cb31" PRIMARY KEY ("groupsId", "teamleadsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ead0285a71b19a040545f5b12f" ON "groups_team_leads_teamleads" ("groupsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b5d5bda06f02a05ea5be9a3692" ON "groups_team_leads_teamleads" ("teamleadsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "notes" ADD CONSTRAINT "FK_c4b5e5ac09bb41db7967ccfe34d" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "attendance" ADD CONSTRAINT "FK_120e1c6edcec4f8221f467c8039" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "groups_students_students" ADD CONSTRAINT "FK_0a13c314755635e495546b352b1" FOREIGN KEY ("groupsId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "groups_students_students" ADD CONSTRAINT "FK_07a78939b3255e9dc14e344a006" FOREIGN KEY ("studentsId") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "groups_team_leads_teamleads" ADD CONSTRAINT "FK_ead0285a71b19a040545f5b12f1" FOREIGN KEY ("groupsId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "groups_team_leads_teamleads" ADD CONSTRAINT "FK_b5d5bda06f02a05ea5be9a36925" FOREIGN KEY ("teamleadsId") REFERENCES "teamleads"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "groups_team_leads_teamleads" DROP CONSTRAINT "FK_b5d5bda06f02a05ea5be9a36925"`,
    );
    await queryRunner.query(
      `ALTER TABLE "groups_team_leads_teamleads" DROP CONSTRAINT "FK_ead0285a71b19a040545f5b12f1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "groups_students_students" DROP CONSTRAINT "FK_07a78939b3255e9dc14e344a006"`,
    );
    await queryRunner.query(
      `ALTER TABLE "groups_students_students" DROP CONSTRAINT "FK_0a13c314755635e495546b352b1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "attendance" DROP CONSTRAINT "FK_120e1c6edcec4f8221f467c8039"`,
    );
    await queryRunner.query(
      `ALTER TABLE "notes" DROP CONSTRAINT "FK_c4b5e5ac09bb41db7967ccfe34d"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_b5d5bda06f02a05ea5be9a3692"`);
    await queryRunner.query(`DROP INDEX "IDX_ead0285a71b19a040545f5b12f"`);
    await queryRunner.query(`DROP TABLE "groups_team_leads_teamleads"`);
    await queryRunner.query(`DROP INDEX "IDX_07a78939b3255e9dc14e344a00"`);
    await queryRunner.query(`DROP INDEX "IDX_0a13c314755635e495546b352b"`);
    await queryRunner.query(`DROP TABLE "groups_students_students"`);
    await queryRunner.query(`DROP TABLE "attendance"`);
    await queryRunner.query(`DROP TABLE "students"`);
    await queryRunner.query(`DROP TABLE "groups"`);
    await queryRunner.query(`DROP TABLE "teamleads"`);
    await queryRunner.query(`DROP TABLE "notes"`);
  }
}
