import { Injectable } from '@angular/core';
import refinery from './data/refinery';
import tier1 from './data/tier1';
import tier2 from './data/tier2';
import tier3 from './data/tier3';
import spaceParts from './data/space_parts';
import nuclear from './data/nuclear';

@Injectable({
  providedIn: 'root'
})
export class HubService {

  allParts: string[];

  constructor(
  ) {
    this.allParts = this.initAllParts();
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

  initAllParts(){
    const refineryParts = this.getRefineryRecipes().map(part => part.part);
    const tier1Parts = this.getTierOneRecipes().map(part => part.part);
    const tier2Parts = this.getTierTwoRecipes().map(part => part.part);
    const tier3Parts = this.getTierThreeRecipes().map(part => part.part);
    const nuclearParts = this.getNuclearRecipes().map(part => part.part);
    const spaceParts = this.getSpaceRecipes().map(part => part.part);


    return [...refineryParts, ...tier1Parts, ...tier2Parts, ...tier3Parts, ...nuclearParts, ...spaceParts];
  }

  public getAllParts(){
    return this.allParts;
  }
  
}
