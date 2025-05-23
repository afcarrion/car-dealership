import { IsString } from "class-validator";

export class CreateCarDto {
    
    @IsString({ message: "Brand Must be a string" })
    readonly brand: string;

    @IsString()
    readonly model: string;

}