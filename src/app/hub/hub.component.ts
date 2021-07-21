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
    uranium: 0
  }

  constructor(
    private hubService: HubService,
    private fb: FormBuilder,
    ) {
      this.productionItemForm = this.fb.group({
        item: [this.item, Validators.required],
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

  getRecipes(part: string): any[] {
    const recipes: any[] = this.hubService.getRecipes(part);
    return recipes;
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
    this.quantity = this.productionItemForm.controls.quantity.value;
    this.toMaximise = this.productionItemForm.controls.toMaximise.value;
    this.forSink = this.productionItemForm.controls.forSink.value;
    this.forPower = this.productionItemForm.controls.forPower.value;

    if(!this.production){
      this.production = [];
    }

    this.production.push({
      part: this.item,
      quantity: this.quantity,
      maximise: this.toMaximise,
      sink: this.forSink,
      power: this.forPower
    });
    console.log(this.production)
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
    console.log('this shouldnt be called')
    this.production = this.production.filter(item => item.part !== part.part);
  }

  getImageUrl(part: string): string {
    return './assets/images/' + part.replace(/ /g, '_') + '.png';
  }

  showRecipes(){
    this.isShowRecipes = !this.isShowRecipes;
  }

  onSubmit(){
    this.result = this.hubService.calcDemand(this.production, this.parts);

    const baseResources = ['iron ore', 'copper ore', 'limestone', 'coal', 'crude oil', 'caterium ore', 'raw quartz', 'sulphur', 'uranium', 'water'];
    const resourceLimits = this.hubService.getResourceLimits();

    console.log('result', this.result);
    
    this.result.forEach(part => {
      if(baseResources.includes(part.part)){
        const key: string = part.part.replace(/ /g, '_');
        console.log(key)
        this.resourceUsage[key] = part.demand;
        console.log(this.resourceUsage)
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
