import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { COFFE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService,

    { provide: COFFE_BRANDS, useValue: ['buddy_brew', 'nescafe'] },
    // Asynchronous "useFactory" (async provider example)
    {
      provide: 'COFFEE_BRANDS',
      // Note "async" here, and Promise/Async event inside the Factory function 
      // Could be a database connection / API call / etc
      // In our case we're just "mocking" this type of event with a Promise
      useFactory: async (connection: Connection): Promise<string[]> => {
        // const coffeeBrands = await connection.query('SELECT * ...');
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe'])
        return coffeeBrands;
      },
      inject: [Connection],
    },
  ],
  exports: [CoffeesService]
})
export class CoffeesModule { }
