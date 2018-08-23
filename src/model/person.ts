import {Table, Column, Model} from 'sequelize-typescript';

@Table
class Person extends Model<Person> {
  @Column
  name?: string;

  @Column
  birthday?: Date;

  
}