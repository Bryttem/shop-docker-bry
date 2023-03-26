import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEntity } from '../brand/entities/brand.entity';



@Module({
    imports: [TypeOrmModule.forFeature([BrandEntity])],
    controllers: [],
    providers: [],
})
export class BrandtModule {}