import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Default,
} from 'sequelize-typescript';
import * as sequelize from 'sequelize';

@Table({ tableName: 'IOT_TELEMETRY', timestamps: false })
export class IotTelemetry extends Model<
  sequelize.InferAttributes<IotTelemetry>,
  sequelize.InferCreationAttributes<IotTelemetry>
> {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'ID', type: DataType.INTEGER })
  declare id: sequelize.CreationOptional<number>;

  @AllowNull(false)
  @Column({ field: 'TENANT_ID', type: DataType.STRING(64) })
  declare tenantId: string;

  @AllowNull(false)
  @Column({ field: 'DEVICE_ID', type: DataType.STRING(64) })
  declare deviceId: string;

  @AllowNull(true)
  @Column({ field: 'SENSOR_ID', type: DataType.STRING(64) })
  declare sensorId?: string;

  @AllowNull(false)
  @Default(DataType.NOW)
  @Column({ field: 'EVENT_TS', type: DataType.DATE })
  declare eventTs: sequelize.CreationOptional<Date>;

  @AllowNull(false)
  @Column({ field: 'METRIC_CODE', type: DataType.STRING(64) })
  declare metricCode: string;

  @AllowNull(true)
  @Column({ field: 'VALUE_NUMBER', type: DataType.DECIMAL(18, 6) })
  declare valueNumber?: string;

  @AllowNull(true)
  @Column({ field: 'VALUE_TEXT', type: DataType.STRING(400) })
  declare valueText?: string;

  @AllowNull(true)
  @Column({ field: 'UNIT', type: DataType.STRING(30) })
  declare unit?: string;

  @AllowNull(true)
  @Column({ field: 'QUALITY_CODE', type: DataType.STRING(30) })
  declare qualityCode?: string;

  @AllowNull(true)
  @Column({ field: 'TAGS_JSON', type: DataType.TEXT })
  declare tagsJson?: string;

  @AllowNull(false)
  @Default(DataType.NOW)
  @Column({ field: 'INGESTED_AT', type: DataType.DATE })
  declare ingestedAt: sequelize.CreationOptional<Date>;
}
