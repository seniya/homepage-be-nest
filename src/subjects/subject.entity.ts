import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Subject {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public postId: number;

  @Column()
  public order: number;
}

export default Subject;
