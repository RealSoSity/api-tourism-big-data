import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  Index,
} from 'sequelize-typescript';

// Adjust import paths to your actual dimension model locations
import { DimDate } from '../../dim-date/entities/dim-date.entity';
import { DimTour } from '../../dim-tour/entities/dim-tour.entity';
import { DimCustomer } from '../../dim-customer/entities/dim-customer.entity';

@Table({
  tableName: 'FACTREVENUEANALYSIS',
  timestamps: false, // table has no CreatedAt/UpdatedAt columns
})
export class FactRevenueAnalysis extends Model<FactRevenueAnalysis> {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'FACTID', type: DataType.INTEGER })
  declare FACTID: number;

  @Index
  @ForeignKey(() => DimDate)
  @Column({ field: 'DATEKEY', type: DataType.INTEGER, allowNull: true })
  declare DATEKEY: number | null;

  @Index
  @ForeignKey(() => DimTour)
  @Column({ field: 'TOURKEY', type: DataType.INTEGER, allowNull: true })
  declare TOURKEY: number | null;

  @Index
  @ForeignKey(() => DimCustomer)
  @Column({ field: 'CUSTOMERKEY', type: DataType.INTEGER, allowNull: true })
  declare CUSTOMERKEY: number | null;

  @Column({ field: 'BOOKINGCOUNT', type: DataType.INTEGER, allowNull: true })
  declare BOOKINGCOUNT: number | null;

  @Column({ field: 'TOTALPAX', type: DataType.INTEGER, allowNull: true })
  declare TOTALPAX: number | null;

  // Oracle NUMBER(12,2) maps cleanly to DECIMAL
  @Column({
    field: 'TOTALREVENUE',
    type: DataType.DECIMAL(12, 2),
    allowNull: true,
  })
  declare TOTALREVENUE: string | null;

  @Column({
    field: 'GROSSPROFIT',
    type: DataType.DECIMAL(12, 2),
    allowNull: true,
  })
  declare GROSSPROFIT: string | null;

  @BelongsTo(() => DimDate)
  Date?: DimDate;

  @BelongsTo(() => DimTour)
  Tour?: DimTour;

  @BelongsTo(() => DimCustomer)
  Customer?: DimCustomer;
}
