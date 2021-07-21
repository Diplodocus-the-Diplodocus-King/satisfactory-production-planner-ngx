import { Injectable } from '@angular/core';
import ores from './data/ores';
import refinery from './data/refinery';
import tier1 from './data/tier1';
import tier2 from './data/tier2';
import tier3 from './data/tier3';
import spaceParts from './data/space_parts';
import nuclear from './data/nuclear';
import resourceLimits from './data/resource_limits';
import { Part } from './models/parts.model';

@Injectable({
  providedIn: 'root'
})
export class HubService {

  allParts: any[];
  allPartNames: string[];

  constructor(
  ) {
    this.allPartNames = this.initAllPartNames();
    this.allParts = this.initAllParts();
  }

  public getOres(){
    return ores;
  }

  public getRefineryRecipes(){
    return refinery;
  }

  public getTierOneRecipes(){
    return tier1;
  }

  public getTierTwoRecipes(){
    return tier2;
  }

  public getTierThreeRecipes(){
    return tier3;
  }

  public getSpaceRecipes(){
    return spaceParts;
  }

  public getNuclearRecipes(){
    return nuclear;
  }

  public getResourceLimits(){
    return resourceLimits;
  }

  initAllParts(){
    return [
      ...this.getOres(),
      ...this.getRefineryRecipes(),
      ...this.getTierOneRecipes(),
      ...this.getTierTwoRecipes(),
      ...this.getTierThreeRecipes(),
      ...this.getNuclearRecipes(),
      ...this.getSpaceRecipes()
          ];
  }

  initAllPartNames(){
    const ores = this.getOres().map(part => part.part);
    const refineryParts = this.getRefineryRecipes().map(part => part.part);
    const tier1Parts = this.getTierOneRecipes().map(part => part.part);
    const tier2Parts = this.getTierTwoRecipes().map(part => part.part);
    const tier3Parts = this.getTierThreeRecipes().map(part => part.part);
    const nuclearParts = this.getNuclearRecipes().map(part => part.part);
    const spaceParts = this.getSpaceRecipes().map(part => part.part);

    return [...ores, ...refineryParts, ...tier1Parts, ...tier2Parts, ...tier3Parts, ...nuclearParts, ...spaceParts];
  }

  public getAllParts(){
    return this.allParts;
  }

  public getAllPartNames(){
    return this.allPartNames;
  }

  public getRecipes(part: string){

    for(let i=0;i<this.allParts.length;i++){
      if(this.allParts[i].part === part){
        return this.allParts[i].recipes;
      }
    }
  }

  
  filterRecipes(parts: Part[]): Part[] {
    let selectedRecipes = [...parts];

    selectedRecipes.forEach((part: Part) => {
      part.recipes = part.recipes.filter(recipe => recipe.isChecked);
    });

    return selectedRecipes;
  }

  public calcDemand(production: any[], parts: Part[]){

    const selectedRecipes = this.filterRecipes(parts);
    console.log(production)
    let productionArray = [...production];
    let partsArray = [...selectedRecipes];

    while(productionArray.length){
      let workingArray = [productionArray[0]];
      productionArray.shift();
      
      while(workingArray.length){ 
        let currentRecipe = workingArray[0];

        workingArray.shift();

        partsArray.forEach(part => {
          if(part.part === currentRecipe.part){
            // add sink points or power gen calcs in here as we'll lose the data from the production array here

            if(!part.demand){
              part.demand = 0;
            }

            part.demand += currentRecipe.quantity;

            if(currentRecipe.forSink && part.sinkPoints){
              part.totalSinkPoints = part.sinkPoints * part.demand;
            }

            part.recipes.forEach(recipe => {
              recipe.demand = part.demand*recipe.ratio;
              recipe.buildings = recipe.demand / recipe.output;
              recipe.totalProduction = recipe.output*recipe.buildings;
              recipe.totalPower = recipe.buildings*recipe.power;

              if(recipe.input1){
                workingArray.push({
                  part: recipe.input1,
                  quantity: recipe.rate1*recipe.buildings
                });
              }

              if(recipe.input2){
                workingArray.push({
                  part: recipe.input2,
                  quantity: recipe.rate2*recipe.buildings
                });
              }

              if(recipe.input3){
                workingArray.push({
                  part: recipe.input3,
                  quantity: recipe.rate3*recipe.buildings
                });
              }

              if(recipe.input4){
                workingArray.push({
                  part: recipe.input4,
                  quantity: recipe.rate4*recipe.buildings
                });
              }

              if(recipe.byProduct){
                workingArray.push({
                  part: recipe.byProduct,
                  quantity: recipe.output2*recipe.buildings*-1
                });
              }
            });
          }
        });
      }
    }
    return partsArray;
  }
  
}
