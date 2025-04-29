import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
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
    createCar( @Body() car: any){
        return car;
    }

    @Patch(':id')
    updateCar( 
        @Param('id') id: number,
        @Body() car: any){
        return car;
    }

    @Delete(':id')
    deleteCar( @Param('id') id){
        return `Deleted id ${id}`
    }

}
