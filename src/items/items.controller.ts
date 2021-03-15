import { Get, Post, Body, Controller, UsePipes } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';
import { ValidationPipe } from '../common/validation.pipe';
import { CreateItemDto } from './create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly intemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.intemsService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() item: CreateItemDto) {
    return this.intemsService.create(item)
  }
}
