import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LowerboundService } from './lowerbound.service';
import { CreateLowerboundDto } from './dto/create-lowerbound.dto';
import { UpdateLowerboundDto } from './dto/update-lowerbound.dto';

@Controller('lowerbound')
export class LowerboundController {
  constructor(private readonly lowerboundService: LowerboundService) {}

  @Get(':brachID/:taxCode/:itemCode/:warehouseCode')
  async findBy(@Param('brachID') brachID: number, @Param('taxCode') taxCode: string, @Param('itemCode') itemCode: string , @Param('warehouseCode') warehouseCode: string){
    return await this.lowerboundService.findAll(brachID,taxCode,itemCode,warehouseCode);
  }
}
