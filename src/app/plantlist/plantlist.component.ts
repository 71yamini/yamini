import { Component } from '@angular/core';

import { Plant } from '../plant';
import { Plantdto } from '../plantdto';
import { PlantoperationService } from '../plantoperation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.css']
})
export class PlantlistComponent {
  __plantService:PlantoperationService;
  router:Router;
  allPlants:Plantdto[] = [];

  constructor(private plantService:PlantoperationService,router:Router)
  {
    this.__plantService = plantService;
    this.router = router;
    this.plantService.getAllPlantsFromSpring().subscribe(
      data=>{
          this.allPlants = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }
 /* viewProductDetails()
  {
    
    this.router.navigate(['planterDetail']);
  }*/
  viewProductDetails(plantId:number,plantName:string,typeOfPlant:string,height:number,price:number,bloomSeason:string)
  {
    localStorage.removeItem('plantId')
    localStorage.removeItem('plantName')
    localStorage.removeItem('typeOfPlant')
    localStorage.removeItem('height')
    localStorage.removeItem('price')
    localStorage.removeItem('bloomSeason')

   

    localStorage.setItem("plantId",plantId+'');
    localStorage.setItem("plantName",plantName);
    localStorage.setItem("typeOfPlant",typeOfPlant);
    localStorage.setItem("height",height+'');
    localStorage.setItem("price",price+'');
    localStorage.setItem("bloomSeason",bloomSeason);
    this.router.navigate(['plantDetail']);
    
    
  }

}
