import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

/* PaginationQueryDto */
export class PaginationQueryDto {
  
  @IsOptional()
  @IsPositive()
  limit: number;

  
  @IsOptional()
  @IsPositive()
  offset: number;
}