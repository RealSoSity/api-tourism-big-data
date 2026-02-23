import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  HasMany,
} from 'sequelize-typescript';
import { FactRevenueAnalysis } from '../../fact-revenue-analysis/entities/fact-revenue-analysis.entity';

@Table({
  tableName: 'DimCustomer',
  timestamps: false,
})
export class DimCustomer extends Model<DimCustomer> {
  @PrimaryKey
  @AutoIncrement
  @Unique('UQ_DimCustomer_Current')
  @Column({ type: DataType.INTEGER })
  CustomerKey!: number;

  @Column({ type: DataType.STRING(8), allowNull: false })
  CustomerID!: string;

  @Column({ type: DataType.STRING(200), allowNull: false })
  Name!: string;

  @Column({ type: DataType.STRING(80), allowNull: false })
  Nationality!: string;

  @Column({ type: DataType.STRING(5), allowNull: true })
  CustTypeID!: string | null;

  @Column({ type: DataType.STRING(100), allowNull: false })
  CustTypeName!: string;

  @Column({ type: DataType.DECIMAL(5, 2), allowNull: true })
  DiscountRate!: string | null;

  // Oracle TIMESTAMP -> Sequelize DATE
  @Column({ type: DataType.DATE, allowNull: false })
  EffectiveFrom!: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  EffectiveTo!: Date | null;

  // DB constraint: ('Y','N')
  @Unique('UQ_DimCustomer_Current')
  @Column({ type: DataType.CHAR(1), allowNull: false, defaultValue: 'Y' })
  IsCurrent!: string;

  @HasMany(() => FactRevenueAnalysis)
  Facts?: FactRevenueAnalysis[];
}
