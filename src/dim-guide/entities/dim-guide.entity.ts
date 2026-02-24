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
import { FactTripPerformance } from '../../fact-trip-performance/entities/fact-trip-performance.entity';
import { FactBookingStatus } from 'src/fact-booking-status/entities/fact-booking-status.entity';

@Table({
  tableName: 'DIMGUIDE',
  timestamps: false,
})
export class DimGuide extends Model<DimGuide> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  GuideKey!: number;

  @Unique('UQ_DimGuide_Current')
  @Column({ type: DataType.STRING(8), allowNull: false })
  GuideID!: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  GuideName!: string;

  @Column({ type: DataType.STRING(20), allowNull: true })
  LanguageSkills!: string | null;

  @Column({ type: DataType.STRING(80), allowNull: true })
  GuideSpecialty!: string | null;

  @Column({ type: DataType.STRING(10), allowNull: true })
  GuideStatus!: string | null;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  GuideSalary!: string | null;

  // Oracle TIMESTAMP -> Sequelize DATE
  @Column({ type: DataType.DATE, allowNull: false })
  EffectiveFrom!: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  EffectiveTo!: Date | null;

  // DB constraint: ('Y','N')
  @Unique('UQ_DimGuide_Current')
  @Column({ type: DataType.CHAR(1), allowNull: false, defaultValue: 'Y' })
  IsCurrent!: string;

  @HasMany(() => FactTripPerformance)
  FactsTrip?: FactTripPerformance[];

  @HasMany(() => FactBookingStatus)
  FactsBookingStatus?: FactBookingStatus[];
}
