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
  FACTID!: number;

  @Index
  @ForeignKey(() => DimDate)
  @Column({ field: 'DATEKEY', type: DataType.INTEGER, allowNull: true })
  DATEKEY!: number | null;

  @Index
  @ForeignKey(() => DimTour)
  @Column({ field: 'TOURKEY', type: DataType.INTEGER, allowNull: true })
  TOURKEY!: number | null;

  @Index
  @ForeignKey(() => DimGuide)
  @Column({ field: 'GUIDEKEY', type: DataType.INTEGER, allowNull: true })
  GUIDEKEY!: number | null;

  @Column({ field: 'TOTALTRIPS', type: DataType.INTEGER, allowNull: true })
  TOTALTRIPS!: number | null;

  @Column({ field: 'PAXPERTRIP', type: DataType.INTEGER, allowNull: true })
  PAXPERTRIP!: number | null;

  @Column({
    field: 'TOTALTRIPCOST',
    type: DataType.DECIMAL(12, 2),
    allowNull: true,
  })
  TOTALTRIPCOST!: string | null;

  @Column({
    field: 'TOTALTRIPREV',
    type: DataType.DECIMAL(12, 2),
    allowNull: true,
  })
  TOTALTRIPREV!: string | null;

  @Column({
    field: 'TRIPPROFIT',
    type: DataType.DECIMAL(12, 2),
    allowNull: true,
  })
  TRIPPROFIT!: string | null;

  @BelongsTo(() => DimDate) Date?: DimDate;
  @BelongsTo(() => DimTour) Tour?: DimTour;
  @BelongsTo(() => DimGuide) Guide?: DimGuide;
}
