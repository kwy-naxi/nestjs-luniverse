import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApimediaService } from './apimedia.service';
import { CreateApimediaDto } from './dto/create-apimedia.dto';
import { UpdateApimediaDto } from './dto/update-apimedia.dto';

@Controller('apimedia')
export class ApimediaController {
  constructor(private readonly apimediaService: ApimediaService) {}

  @Post()
  create(@Body() createApimediaDto: CreateApimediaDto) {
    return this.apimediaService.create(createApimediaDto);
  }

  @Get()
  findAll() {
    return this.apimediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apimediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApimediaDto: UpdateApimediaDto) {
    return this.apimediaService.update(+id, updateApimediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apimediaService.remove(+id);
  }
}
