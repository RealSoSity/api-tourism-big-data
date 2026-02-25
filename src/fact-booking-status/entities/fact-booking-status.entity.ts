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
  FACTID!: number;

  @Index
  @ForeignKey(() => DimDate)
  @Column({ field: 'DATEKEY', type: DataType.INTEGER, allowNull: true })
  DATEKEY!: number | null;

  @Index
  @ForeignKey(() => DimTour)
  @Column({ field: 'TOURKEY', type: DataType.INTEGER, allowNull: true })
  TOURKEY!: number | null;

  // DimBooking PK is BookingKey
  @Index
  @ForeignKey(() => DimBooking)
  @Column({ field: 'BOOKINGMETAKEY', type: DataType.INTEGER, allowNull: true })
  BOOKINGMETAKEY!: number | null;

  @Index
  @ForeignKey(() => DimGuide)
  @Column({ field: 'GUIDEKEY', type: DataType.INTEGER, allowNull: true })
  GUIDEKEY!: number | null;

  @Column({ field: 'TOTALBOOKINGS', type: DataType.INTEGER, allowNull: true })
  TOTALBOOKINGS!: number | null;

  @Column({ field: 'CANCELCOUNT', type: DataType.INTEGER, allowNull: true })
  CANCELCOUNT!: number | null;

  @BelongsTo(() => DimDate) Date?: DimDate;
  @BelongsTo(() => DimTour) Tour?: DimTour;
  @BelongsTo(() => DimBooking) BookingMeta?: DimBooking;
  @BelongsTo(() => DimGuide) Guide?: DimGuide;
}
