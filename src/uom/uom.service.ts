import { Injectable } from '@nestjs/common';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class UomService {
  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Item>,
    private readonly dataSource: DataSource
  ){}

  async findAll(grpCode: string) {
    const uom = await this.dataSource.query(
      `SELECT * FROM TVF_GET_UOM ('${grpCode}')`
    );
    return uom;
  }
}
