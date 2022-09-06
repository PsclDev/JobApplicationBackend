import { ApplicationEntity } from '@module/application/application.entity';
import { MeetingInterface, PersonInterface } from '@shared/types';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('meeting')
export class MeetingEntity implements MeetingInterface {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  date: Date;

  @Column({ type: 'jsonb' })
  attendees: PersonInterface[];

  @Column({ nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ name: 'application_id' })
  applicationId: string;

  @ManyToOne(() => ApplicationEntity, (application) => application.meetings)
  @JoinColumn({ name: 'group_iapplication_idd' })
  @Exclude()
  application: ApplicationEntity;
}
