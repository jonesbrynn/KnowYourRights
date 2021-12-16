import { Component, OnInit } from '@angular/core';
import { NATLAWS } from '../app/natlaws';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-national-law',
  templateUrl: './national-law.component.html',
  styleUrls: ['./national-law.component.css'],
})
export class NationalLawComponent implements OnInit {
  natlaw = NATLAWS;

  constructor() {}

  ngOnInit() {}
}
