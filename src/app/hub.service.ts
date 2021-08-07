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

  calcRubber(partsArray: any[], currentRubberDemand: number): string {
    const currentPolymer = partsArray.filter(part => part.part === 'polymer resin');
    const currentRubber = partsArray.filter(part => part.part === 'rubber');
    const polymerDemand = (40/20)*currentRubberDemand;
    let useRecipe: string;
    console.log('rubber total demand', currentRubber[0].demand, 'current cycle rubber', currentRubberDemand)
    console.log('polymer demand', polymerDemand, 'polymer byproduct', currentPolymer[0].demand)
    useRecipe = currentPolymer[0].demand + polymerDemand <= 0 ? 'residual rubber' : 'recycled rubber';
    console.log('using:', useRecipe)
    return useRecipe;
  }

  public calcDemand(production: any[]){

    // const selectedRecipes = this.filterRecipes(parts);

    let productionArray = [...production];
    let partsArray = [...this.allParts];

    while(productionArray.length){
      let workingArray = [productionArray[0]];
      productionArray.shift();
      
      while(workingArray.length){ 
        let currentRecipe = workingArray[0];

        workingArray.shift();

        if(currentRecipe.part === 'rubber' && workingArray.length >= 1){
          workingArray.forEach((part, index) => {
            if(part.part === 'rubber'){
              currentRecipe.quantity += part.quantity;
              workingArray.splice(index, 1);
            }
          })
          workingArray.push(currentRecipe);
          continue;
        }

        partsArray.forEach(part => {
          if(part.part === currentRecipe.part){
            // add sink points or power gen calcs in here as we'll lose the data from the production array here
            console.log(part.part, 'part total demand', part.demand, 'part new demand', currentRecipe.quantity)
            
            if(!part.demand){
              part.demand = 0;
            }

            part.demand += currentRecipe.quantity;

            // if(currentRecipe.forSink && part.sinkPoints){
            //   part.totalSinkPoints = part.sinkPoints * part.demand;
            // }

            if(part.part === 'rubber'){
              currentRecipe.recipe = this.calcRubber(partsArray, currentRecipe.quantity);
            } else if(!currentRecipe.recipe && part.recipes.length > 1){
              let mostEfficient: any[] = [];
              for(let i=0; i<part.recipes.length; i++){
                if(!mostEfficient.length){
                  mostEfficient = [part.recipes[i].part, part.recipes[i].weightedCost];
                } else if (mostEfficient[1] > part.recipes[i].weightedCost){
                  mostEfficient = [part.recipes[i].part, part.recipes[i].weightedCost];
                }
              }
              currentRecipe.recipe = mostEfficient[0];
            } else if (part.recipes.length === 1){
              currentRecipe.recipe = part.recipes[0].part;
            }

            part.recipes.filter(recipe => recipe.part === currentRecipe.recipe).forEach(recipe => {
              console.log(recipe)
              recipe.demand = part.demand;
              recipe.buildings = recipe.demand / recipe.output;
              recipe.totalProduction = recipe.output*recipe.buildings;
              recipe.totalPower = recipe.buildings*recipe.power;

              if(recipe.input1){
                workingArray.push({
                  part: recipe.input1,
                  quantity: recipe.rate1*(currentRecipe.quantity / recipe.output),
                });
              }

              if(recipe.input2){
                workingArray.push({
                  part: recipe.input2,
                  quantity: recipe.rate2*(currentRecipe.quantity / recipe.output),
                });
              }

              if(recipe.input3){
                workingArray.push({
                  part: recipe.input3,
                  quantity: recipe.rate3*(currentRecipe.quantity / recipe.output),            
                });
              }

              if(recipe.input4){
                workingArray.push({
                  part: recipe.input4,
                  quantity: recipe.rate4*(currentRecipe.quantity / recipe.output), 
                });
              }

              if(recipe.byProduct){
                workingArray.push({
                  part: recipe.byProduct,
                  quantity: recipe.output2*(currentRecipe.quantity / recipe.output)*-1
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
