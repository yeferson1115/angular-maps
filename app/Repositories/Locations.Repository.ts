import { Injectable} from '@angular/core';
import {PrismicService} from '../Vendors/prismic-service';
import { Prismic } from 'prismic.io';
import {LocationsContract} from './Contracts/LocationsContract';
import {MapperLocationHelper} from '../Helpers/LocationsHelper';

export abstract class ILocationsRepository{

    abstract getAll(skip:Number, page:Number) : Promise<[Array<LocationsContract>,number]>;
  
    abstract getById(recipeId:String): Promise<Array<LocationsContract>>;
   

}

@Injectable()
export class LocationsRepository implements ILocationsRepository{
    constructor(private prismicService: PrismicService) { 
    }

    getAll(skip:Number,page:Number) : Promise<[Array<LocationsContract>,number]>{
        
      return this.prismicService.api().then((api) => 
            api.query(Prismic.Predicates.at('document.type','locations'),
            {   pageSize:skip,
                page:page,
                orderings :'[my.locations.title]'
            }))
            .then((response) => {
                let contract: [Array<LocationsContract>, number];
                contract = [MapperLocationHelper.MaplocationsFromPrismic(response.results),<number>response.total_pages];
                return contract;
           });

    }
    getById(recipeId:String): Promise<Array<LocationsContract>>{ 
       return this.prismicService.api().then((api) => 
            api.query('[[:d=at(my.locations.uid,"'+recipeId+'")]]'))
            .then((response) => {
                var contracts:Array<LocationsContract> = MapperLocationHelper.MaplocationsFromPrismic(response.results);
                return contracts;
           });
       
    }
    

    


  
}



