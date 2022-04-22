import { PartialType } from '@nestjs/mapped-types';
import { CreateApimediaDto } from './create-apimedia.dto';

export class UpdateApimediaDto extends PartialType(CreateApimediaDto) {}
