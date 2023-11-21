import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { ItemModule } from './item/item.module';
import { UomModule } from './uom/uom.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: 'p@ssw0rd',
    database: 'BCD_TEST_DB',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,

    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  
  })
  ,CustomerModule, ItemModule, UomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
