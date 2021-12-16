import { Component, OnInit } from '@angular/core';
import { NATLAWS } from '../app/natlaws';

@Component({
  selector: 'app-national-law',
  templateUrl: './national-law.component.html',
  styleUrls: ['./national-law.component.css'],
})
export class NationalLawComponent implements OnInit {
  natlaws = NATLAWS;

  constructor() {}

  ngOnInit() {}
}
