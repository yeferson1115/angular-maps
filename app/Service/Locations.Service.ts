import {ILocationsRepository} from '../Repositories/Locations.Repository';
import { Injectable} from '@angular/core';
import {LocationsModel} from '../Models/LocationsModel';
import {MapperLocationHelper} from '../Helpers/LocationsHelper';


export abstract class ILocationsService{

    abstract getAll(skip:Number,page:Number) : Promise<[Array<LocationsModel>,number]>;
    abstract getById(recipeId: String) : Promise<Array<LocationsModel>>;
   
}


@Injectable()
export class LocationsService implements ILocationsService{
    constructor(public locationsRepo: ILocationsRepository) { }

    getAll(skip:Number,page:Number) : Promise<[Array<LocationsModel>,number]>{
        return this.locationsRepo.getAll(skip,page).then(data => {
            let contract: [Array<LocationsModel>, number];
            contract = [MapperLocationHelper.MapLocationsContractsToModels(data[0]),data[1]];
            return contract;
        });
    }
    getById(recipeId:String) :Promise<Array<LocationsModel>>{
        return this.locationsRepo.getById(recipeId).then(data =>{
            return MapperLocationHelper.MapLocationsContractsToModels(data);
        });
    }
    

 

}