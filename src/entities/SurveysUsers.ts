import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('surveys_users')
class SurveysUsers {
 @PrimaryGeneratedColumn("uuid")
id: string;

@Column()
user_id: string;

@Column()
survey_id: string;

@Column()
value: number;

@CreateDateColumn()
created_at: Date;
}

export { SurveysUsers }