import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'DEPARTMENT',
  timestamps: true,
})
export class Department extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
    field: 'DEPTCODE',
  })
  declare deptCode: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'DEPTNAME',
  })
  declare deptName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    field: 'TOTALEMP',
  })
  declare totalEmp: string;
}
