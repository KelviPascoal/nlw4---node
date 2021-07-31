import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('surveys')
class Surveys {
 @PrimaryGeneratedColumn("uuid")
id: string;

@Column()
title: string;

@Column()
description: string;

@CreateDateColumn()
created_at: Date;
}

export { Surveys }