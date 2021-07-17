import { Component, OnInit } from '@angular/core';
import { HubService } from '../hub.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {

  constructor(private hubService: HubService) { }

  ngOnInit(): void {
    console.log(this.hubService.getRefineryRecipes());
  }

}
