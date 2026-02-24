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
import { FactBookingStatus } from 'src/fact-booking-status/entities/fact-booking-status.entity';

@Table({
  timestamps: false,
  tableName: 'DIMBOOKING',
})
export class DimBooking extends Model<DimBooking> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  BookingKey!: number;

  @Unique('UQ_DimBooking_Current')
  @Column({ type: DataType.STRING(8), allowNull: false })
  BookingID!: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  BookingStatus!: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  PaymentStatus!: string;

  // If you get ORA-00904 invalid identifier, use `field: 'PAYMENTMETHOD'` (see note below)
  @Column({ type: DataType.STRING(20), allowNull: false })
  PaymentMethod!: string;

  // Oracle TIMESTAMP -> Sequelize DATE
  @Column({ type: DataType.DATE, allowNull: false })
  EffectiveFrom!: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  EffectiveTo!: Date | null;

  // DB constraint: ('Y','N')
  @Unique('UQ_DimBooking_Current')
  @Column({ type: DataType.CHAR(1), allowNull: false, defaultValue: 'Y' })
  IsCurrent!: string;

  @HasMany(() => FactBookingStatus)
  FactsBookingStatus?: FactBookingStatus[];
}
