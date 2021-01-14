import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(
    private buttom: MatButtonModule
  ) { }

  ngOnInit() {
  }

}
