import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user',
})
export default class User extends Model<User> {
  @Column name?: string;
}
