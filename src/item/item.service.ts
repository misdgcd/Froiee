import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ItemService {

  constructor(
    // @InjectRepository(Item)
    // private readonly itemRepo: Repository<Item>,
    private readonly dataSource: DataSource
  ){}
  
  async findAll(priceList: number,warehouse: string) {
    const items = await this.dataSource.query(
      `SELECT * FROM TVF_ITEM_DETAILS (${priceList},'${warehouse}') ORDER BY ItemName`
    );
    return items;
  }
}