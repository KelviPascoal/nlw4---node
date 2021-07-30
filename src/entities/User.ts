import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
class User {
 @PrimaryGeneratedColumn("uuid")
id: string;

@Column()
name: string;

@Column()
email: string;

@CreateDateColumn()
created_at: Date;
}

export {User}