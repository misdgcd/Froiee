import { Injectable } from '@nestjs/common';
import { CreateLowerboundDto } from './dto/create-lowerbound.dto';
import { UpdateLowerboundDto } from './dto/update-lowerbound.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class LowerboundService {
  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Uom>,
    private readonly dataSource: DataSource
  ){}

  async findAll(brachID: number, taxCode: string, itemCode: string, warehouseCode: string) {
    const uom = await this.dataSource.query(
      `SELECT dbo.fn_GetLowerBound (${brachID}, '${taxCode}', '${itemCode}','${warehouseCode}') AS LoweBound`
    );
    return uom;
  }
}
