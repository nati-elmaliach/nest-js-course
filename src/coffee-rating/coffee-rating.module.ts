import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [CoffeeRatingService],
  imports: [
    DatabaseModule.register({ // 👈 passing in dynamic values
      type: 'postgres',
      host: 'localhost',
      password: 'password',
    })
    , CoffeesModule]
})
export class CoffeeRatingModule { }
