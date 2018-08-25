import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Length,
  Default,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'user',
  timestamps: true,
})
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Length({ min: 3, max: 15, msg: 'wrong length' })
  @Default('0123')
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  static aaa() {
    return this.findAll({});
  }
}
