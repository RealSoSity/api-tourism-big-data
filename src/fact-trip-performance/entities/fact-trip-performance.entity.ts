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

import { DimDate } from '../../dim-date/entities/dim-date.entity';
import { DimTour } from '../../dim-tour/entities/dim-tour.entity';
import { DimGuide } from '../../dim-guide/entities/dim-guide.entity';

@Table({
  tableName: 'FACTTRIPPERFORMANCE',
  timestamps: false,
})
export class FactTripPerformance extends Model<FactTripPerformance> {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'FACTID', type: DataType.INTEGER })
  FactID!: number;

  @Index
  @ForeignKey(() => DimDate)
  @Column({ field: 'DATEKEY', type: DataType.INTEGER, allowNull: true })
  DateKey!: number | null;

  @Index
  @ForeignKey(() => DimTour)
  @Column({ field: 'TOURKEY', type: DataType.INTEGER, allowNull: true })
  TourKey!: number | null;

  @Index
  @ForeignKey(() => DimGuide)
  @Column({ field: 'GUIDEKEY', type: DataType.INTEGER, allowNull: true })
  GuideKey!: number | null;

  @Column({ field: 'TOTALTRIPS', type: DataType.INTEGER, allowNull: true })
  TotalTrips!: number | null;

  @Column({ field: 'PAXPERTRIP', type: DataType.INTEGER, allowNull: true })
  PaxPerTrip!: number | null;

  @Column({
    field: 'TOTALTRIPCOST',
    type: DataType.DECIMAL(12, 2),
    allowNull: true,
  })
  TotalTripCost!: string | null;

  @Column({
    field: 'TOTALTRIPREV',
    type: DataType.DECIMAL(12, 2),
    allowNull: true,
  })
  TotalTripRev!: string | null;

  @Column({
    field: 'TRIPPROFIT',
    type: DataType.DECIMAL(12, 2),
    allowNull: true,
  })
  TripProfit!: string | null;

  @BelongsTo(() => DimDate) Date?: DimDate;
  @BelongsTo(() => DimTour) Tour?: DimTour;
  @BelongsTo(() => DimGuide) Guide?: DimGuide;
}
