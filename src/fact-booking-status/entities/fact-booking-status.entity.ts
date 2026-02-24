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
import { DimBooking } from '../../dim-booking/entities/dim-booking.entity';
import { DimGuide } from '../../dim-guide/entities/dim-guide.entity';

@Table({
  tableName: 'FACTBOOKINGSTATUS',
  timestamps: false,
})
export class FactBookingStatus extends Model<FactBookingStatus> {
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

  // DimBooking PK is BookingKey
  @Index
  @ForeignKey(() => DimBooking)
  @Column({ field: 'BOOKINGMETAKEY', type: DataType.INTEGER, allowNull: true })
  BookingMetaKey!: number | null;

  @Index
  @ForeignKey(() => DimGuide)
  @Column({ field: 'GUIDEKEY', type: DataType.INTEGER, allowNull: true })
  GuideKey!: number | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  TotalBookings!: number | null;

  @Column({ field: 'CALCENCOUNT', type: DataType.INTEGER, allowNull: true })
  CancelCount!: number | null;

  @BelongsTo(() => DimDate) Date?: DimDate;
  @BelongsTo(() => DimTour) Tour?: DimTour;
  @BelongsTo(() => DimBooking) BookingMeta?: DimBooking;
  @BelongsTo(() => DimGuide) Guide?: DimGuide;
}
