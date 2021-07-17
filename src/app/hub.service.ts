import { Injectable } from '@angular/core';
import refinery from './data/refinery';
import tier1 from './data/tier1';
import tier2 from './data/tier2';
import tier3 from './data/tier3';

@Injectable({
  providedIn: 'root'
})
export class HubService {

  constructor(
  ) {

  }

  public getRefineryRecipes(){
    return tier1;
  }
}
