import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pointcloud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
