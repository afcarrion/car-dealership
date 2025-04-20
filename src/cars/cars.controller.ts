import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
    getCarById(@Param('id', ParseIntPipe) id){
        console.log(id)
        return this.carsService.findById(id)
    }

    @Post()
    createCar( @Body() car: any){
        return car;
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseIntPipe) id: number,
        @Body() car: any){
        return car;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id){
        return `Deleted id ${id}`
    }

}
