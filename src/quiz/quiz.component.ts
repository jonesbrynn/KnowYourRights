import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {

  selectedRight : string;
  rights : string[] = [
    'Rights to Record',
    'Rights from Bill of Rights',
    'Safety Suggestions',
    'If you have been detained by the police',
    'If your rights were violated'
  ];
  constructor() {}

  ngOnInit() {}
}
