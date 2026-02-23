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
  tableName: 'DimTour',
  timestamps: false,
})
export class DimTour extends Model<DimTour> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  TourKey!: number;

  @Unique('UQ_DimTour_Current')
  @Column({ type: DataType.STRING(8), allowNull: false })
  TourID!: string;

  @Unique('UQ_DimTour_TourCode_Current')
  @Column({ type: DataType.STRING(20), allowNull: false })
  TourCode!: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  Name!: string;

  // NUMBER(2)
  @Column({ type: DataType.INTEGER, allowNull: true })
  CapacityPax!: number | null;

  @Column({ type: DataType.DATE, allowNull: true })
  StartDate!: Date | null;

  @Column({ type: DataType.DATE, allowNull: true })
  EndDate!: Date | null;

  @Column({ type: DataType.STRING(10), allowNull: true })
  TourStatus!: string | null;

  @Column({ type: DataType.STRING(8), allowNull: true })
  TourTypeID!: string | null;

  @Column({ type: DataType.STRING(20), allowNull: true })
  TourTypeName!: string | null;

  @Column({ type: DataType.STRING(100), allowNull: true })
  TourTypeDesc!: string | null;

  // NUMBER(10) -> DECIMAL is safest
  @Column({ type: DataType.DECIMAL(10, 0), allowNull: true })
  BasePrice!: string | null;

  // NUMBER(3)
  @Column({ type: DataType.INTEGER, allowNull: true })
  DurationDays!: number | null;

  // 'Y'/'N' flag
  @Column({ type: DataType.CHAR(1), allowNull: true })
  ActiveFlag!: string | null;

  @Column({ type: DataType.STRING(8), allowNull: true })
  DestinationCountryID!: string | null;

  @Column({ type: DataType.STRING(20), allowNull: true })
  DestinationCountryName!: string | null;

  @Column({ type: DataType.DATE, allowNull: false })
  EffectiveFrom!: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  EffectiveTo!: Date | null;

  // check constraint exists in DB: ('Y','N')
  @Unique('UQ_DimTour_Current')
  @Unique('UQ_DimTour_TourCode_Current')
  @Column({ type: DataType.CHAR(1), allowNull: false, defaultValue: 'Y' })
  IsCurrent!: string;

  @HasMany(() => FactRevenueAnalysis)
  Facts?: FactRevenueAnalysis[];
}
