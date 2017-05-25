import {LocationsContract} from '../Repositories/Contracts/LocationsContract';
import {LocationsModel} from '../Models/LocationsModel';


export class MapperLocationHelper{
    constructor(){}
    static MapLocationFromPrismic(document:any):LocationsContract{        
        var contract: LocationsContract = new LocationsContract();
        contract.Id = document["id"];
             
        var data = document["data"];
        if(data["locations.title"]){
            contract.Title = data["locations.title"]["value"];   
        } 
        if(data["locations.image"]){
            contract.Image = data["locations.image"]["value"]["main"]["url"];
        }
        if(data["locations.longitud"]){
            contract.Long = data["locations.longitud"]["value"];  
        }            
        if(data["locations.latitud"]){
           contract.Lat = data["locations.latitud"]["value"]; 
        }
      
    

        return contract;
    }    
    static MaplocationsFromPrismic(documents:Array<any>):Array<LocationsContract>{
        var contracts: Array<LocationsContract> = new Array<LocationsContract>();
        for(let i of documents){
            contracts.push(this.MapLocationFromPrismic(i));    
        }
        return contracts;
    }
    static MapLocationsContractsToModels(contracts:Array<LocationsContract>):Array<LocationsModel>{
        var models: Array<LocationsModel> = new Array<LocationsModel>();
        
        for(let i of contracts){
            models.push(this.MapLocationContractToModel(i));    
        }
        return models;
    }
     static MapLocationContractToModel(contract:LocationsContract):LocationsModel{
        var model:LocationsModel = new LocationsModel();
        model.Id = contract.Id;
        model.Title = contract.Title;
        model.Image = contract.Image;
        model.Lat = contract.Lat;
        model.Long = contract.Long;
     
             
        return model;
    }

   


}