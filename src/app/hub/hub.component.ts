import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HubService } from '../hub.service';
import { Part } from '../models/parts.model';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {

  productionItemForm: FormGroup;
  item: string = '';
  recipe: string;
  recipes: string[];
  quantity: number = 0;
  toMaximise: boolean = false;
  forSink: boolean = false;
  forPower: boolean = false;

  partNames: string[];
  parts: Part[];
  production: any[];

  isShowRecipes: boolean = false;

  result: Part[];
  resourceUsage: any = {
    iron_ore: 0,
    copper_ore: 0,
    limestone: 0,
    coal: 0,
    crude_oil: 0,
    caterium_ore: 0,
    bauxite: 0,
    raw_quartz: 0,
    sulphur: 0,
    uranium: 0,
    weightedCost: 0
  }

  constructor(
    private hubService: HubService,
    private fb: FormBuilder,
    ) {
      this.productionItemForm = this.fb.group({
        item: [this.item, Validators.required],
        recipe: [this.recipe, Validators.required],
        quantity: [this.quantity, Validators.required],
        toMaximise: [this.toMaximise],
        forSink: [this.forSink],
        forPower: [this.forPower]
      });

      this.partNames = this.hubService.getAllPartNames();
      this.parts = this.hubService.getAllParts();

      this.parts.forEach(part => {
        let recipes = part.recipes.map(recipe => {
          return {
            ...recipe,
            isChecked: false,
            ratio: 0,
           }
        });
        part.recipes = recipes;
      });
    }

  ngOnInit(): void {

  }

  getRecipes(part?: string): void {
    if(!part){
      part = this.productionItemForm.controls.item.value;
    }

    this.recipes = this.hubService.getRecipes(part).map(recipe => recipe.part)
    return;
  }

  setMaximise(){
    if(!this.productionItemForm.controls.toMaximise.value){
      this.productionItemForm.controls.quantity.disable();
    } else {
      this.productionItemForm.controls.quantity.enable();
    }
  }

  setSink(){
    if(!this.productionItemForm.controls.forSink.value){
      this.productionItemForm.controls.forPower.disable();
    } else {
      this.productionItemForm.controls.forPower.enable();
    }
  }

  setPower(){
    if(!this.productionItemForm.controls.forPower.value){
      this.productionItemForm.controls.forSink.disable();
    } else {
      this.productionItemForm.controls.forSink.enable();
    }
  }

  addItem(){
    this.item = this.productionItemForm.controls.item.value;
    this.recipe = this.productionItemForm.controls.recipe.value;
    this.quantity = this.productionItemForm.controls.quantity.value;
    this.toMaximise = this.productionItemForm.controls.toMaximise.value;
    this.forSink = this.productionItemForm.controls.forSink.value;
    this.forPower = this.productionItemForm.controls.forPower.value;

    if(!this.production){
      this.production = [];
    }

    this.production.push({
      part: this.item,
      recipe: this.recipe,
      quantity: this.quantity,
      maximise: this.toMaximise,
      sink: this.forSink,
      power: this.forPower
    });
  }

  selectRecipe(event: Event, part: Part, recipe: any): void{

    if(event.target instanceof HTMLInputElement){
      return;
    }

    part.recipes.forEach(itemRecipe => {
      if(itemRecipe.part === recipe.part){
        recipe.isChecked = !recipe.isChecked;
        recipe.ratio = recipe.isChecked ? 1 : 0;
      }
    });
  }

  removeItem(part: any){
    this.production = this.production.filter(item => item.part !== part.part);
  }

  getImageUrl(part: string): string {
    return './assets/images/' + part.replace(/ /g, '_') + '.png';
  }

  showRecipes(){
    this.isShowRecipes = !this.isShowRecipes;
  }

  onSubmit(){
    this.result = this.hubService.calcDemand(this.production);

    const baseResources = ['iron ore', 'copper ore', 'limestone', 'coal', 'crude oil', 'caterium ore', 'raw quartz', 'bauxite', 'sulphur', 'nitrogen gas', 'uranium', 'water'];
    const resourceLimits = this.hubService.getResourceLimits();
    
    this.result.forEach(part => {
      if(baseResources.includes(part.part)){
        const key: string = part.part.replace(/ /g, '_');

        if(!part.demand){
          part.demand = 0;
        }

        this.resourceUsage[key] = Math.round(part.demand * 1000) / 1000;
        this.resourceUsage.weightedCost += part.demand * resourceLimits[key].weight;
      }
    });
    return;
  }

  // sortMaximise(){
  //   const maximisePart = this.production.filter(part => part.maximise);
  //   this.production = this.production.filter(part => !part.maximise);
  //   this.production.push(maximisePart[0]);
  // }

}
