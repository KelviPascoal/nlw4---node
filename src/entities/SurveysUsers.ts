import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Surveys } from "./Surveys";
import { User } from "./User";

@Entity("surveys_users")
class SurveysUsers {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  survey_id: string;

  @ManyToOne(() => Surveys)
  @JoinColumn({ name: "survey_id" })
  survey: Surveys;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;
}

export { SurveysUsers };
