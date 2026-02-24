import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { FactBookingStatus } from 'src/fact-booking-status/entities/fact-booking-status.entity';
import { FactRevenueAnalysis } from 'src/fact-revenue-analysis/entities/fact-revenue-analysis.entity';
import { FactTripPerformance } from 'src/fact-trip-performance/entities/fact-trip-performance.entity';

@Table({
  tableName: 'DimDate',
  timestamps: false,
})
export class DimDate extends Model<DimDate> {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  DateKey!: number;

  // Oracle DATE includes date+time; if you store only date, still map as DATE
  @Column({ type: DataType.DATE, allowNull: false })
  FullDate!: Date;

  @Column({ type: DataType.INTEGER, allowNull: false })
  Day!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  Month!: number;

  @Column({ type: DataType.STRING(20), allowNull: true })
  MonthName!: string | null;

  @Column({ type: DataType.INTEGER, allowNull: false })
  Quarter!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  Year!: number;

  @HasMany(() => FactRevenueAnalysis)
  FactsRevenue?: FactRevenueAnalysis[];

  @HasMany(() => FactTripPerformance)
  FactsTrip?: FactTripPerformance[];

  @HasMany(() => FactBookingStatus)
  FactsBookingStatus?: FactBookingStatus[];
}
