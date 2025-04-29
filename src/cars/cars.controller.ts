import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes( ValidationPipe )
export class CarsController {

    constructor(
        private readonly carsService : CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({version:'4'})) id){
        console.log(id)
        return this.carsService.findById(id)
    }

    @Post()
    createCar( @Body() createCarDto: CreateCarDto ){
        return createCarDto;
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseIntPipe) id: number,
        @Body() car: any){
        return car;
    }

    @Delete(':id')
    deleteCar( @Param('id') id){
        return `Deleted id ${id}`
    }

}
