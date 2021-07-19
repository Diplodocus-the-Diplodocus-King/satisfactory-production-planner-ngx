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

  selectRecipe(part: Part, recipe: any): void{
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

  onSubmit(event: Event){
    event.preventDefault();
    console.log(this.production)
    const selectedRecipes = this.filterRecipes();
    // this.sortMaximise();
    console.log(this.production)
    this.hubService.calcDemand(this.production, selectedRecipes);
  }

  filterRecipes(): Part[] {
    let selectedRecipes = [...this.hubService.getAllParts()];

    selectedRecipes.forEach((part: Part) => {
      part.recipes = part.recipes.filter(recipe => recipe.isChecked);
    });

    return selectedRecipes;
  }

  // sortMaximise(){
  //   const maximisePart = this.production.filter(part => part.maximise);
  //   this.production = this.production.filter(part => !part.maximise);
  //   this.production.push(maximisePart[0]);
  // }

}
