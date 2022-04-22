import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApinftService } from './apinft.service';
import { CreateAuthDto } from './CreateAuthDto';

@Controller('apinft')
export class ApinftController {
    constructor(private apinftService: ApinftService) {};

    @Get()
    async findAll(): Promise<any> {
        const apinaver = await this.apinftService.findAll();
        return apinaver;
    }

    // AuthToken 생성
    @Post()
    async create(@Body() createAuthDto: CreateAuthDto) { 
        return await this.apinftService.create(createAuthDto);
    }

    @Get('contractlist')
    contractFindAll() {
        return this.apinftService.contractFindAll();
    }

    @Get('/contract')
    contractFindOne(@Query('id')id :string): Promise<any> {
        return this.apinftService.contractFindOne(id);
    }
}
