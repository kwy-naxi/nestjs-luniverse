import { Injectable } from '@nestjs/common';
import { CreateApimediaDto } from './dto/create-apimedia.dto';
import { UpdateApimediaDto } from './dto/update-apimedia.dto';

@Injectable()
export class ApimediaService {

  create(createApimediaDto: CreateApimediaDto) {
    
    return 'This action adds a new apimedia';
  }

  findAll() {
    console.log();
    return `This action returns all apimedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apimedia`;
  }

  update(id: number, updateApimediaDto: UpdateApimediaDto) {
    return `This action updates a #${id} apimedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} apimedia`;
  }
}
