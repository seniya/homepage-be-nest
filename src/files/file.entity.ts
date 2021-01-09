import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from 'src/users/user.entity';

@Entity()
class File {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public originalname: string;

  @Column()
  public mimetype: string;

  @Column()
  public destination: string;

  @Column()
  public filename: string;

  @Column()
  public path: string;

  @Column()
  public size: number;

  @Column()
  public cntDown: number;

  @Column({ type: 'boolean' })
  public readAll: boolean;

  @Column({ type: 'boolean' })
  public useAble: boolean;

  @ManyToOne(() => User, (author: User) => author.posts)
  public author?: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

export default File;