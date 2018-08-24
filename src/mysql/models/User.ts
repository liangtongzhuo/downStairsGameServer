import {
  Table,
  Column,
  Model,
  Length,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'user',
})
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Length({ min: 1, max: 40, msg: 'wrong length' })
  @Column(DataType.STRING)
  name!: string;
}
