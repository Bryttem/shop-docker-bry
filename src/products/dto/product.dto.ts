import { IsString, IsNumber } from "class-validator";
import { IsNotEmpty, IsOptional, MinLength, } from "class-validator/types/decorator/decorators";


export class ProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    description: string;

    @IsNumber()
    @IsOptional()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;
}