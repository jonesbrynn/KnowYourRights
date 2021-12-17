import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  selectedRight: string;
  form: FormGroup;

  rights = [
    {
      id: 1,
      type: 'Rights to Record',
      description: `
Driver has right to take images, videos, and still images in public places.\n 
In Louisiana, recording videos is a protected right but recording sound without consent is illegal.\n 
Passenger has right to ask to leave. If given, passenger may silently leave.\n
Passenger has right to silently leave if not arrested.
    `,
    },
    {
      id: 2,
      type: 'Rights from Bill of Rights',
      description: `
Right to ask for lawyer immediately.\n 
Right to refuse a search of yourself and your car.\n 
Right to remain silent. For safety measures, exercise your right out loud and say your name.\n 
Right to decline an officer's request to search your vehicle.\n 
The Plain View Doctrine prohibits law enforcement from investigating inside of a vehicle or anything outside of plain view without a warrant. Without the driver's consent to search the vehicle, an officer must have a warrant with probable cause to look further inside a vehicle.
    `,
    },
    {
      id: 3,
      type: 'Safety Suggestions',
      description: `
Stop the car in a safe place as quickly as possible.\n 
Turn off the car, turn on the internal light, open the window part way, and place your hands on the wheel. If you’re in the passenger seat, put your hands on the dashboard.\n 
Upon request, show police your driver’s license, registration, and proof of insurance.\n 
Avoid making sudden movements, and keep your hands where the officer can see them.\n 
*LAW* The police may stop and question you because you are a witness, not a suspect. This is called a “Terry Stop.”\n 
If you are a suspect, it may be because you fit the description of someone involved in a crime.\n 
*LAW* They can ask about your name, address and age, or request your I.D.\n 
*LAW* The police must have a reasonable suspicion – meaning a clear, specific and unbiased reason for suspecting that you committed, are committing, or are about to commit a crime. They cannot stop you simply because you “look suspicious.”\n 
Ask “Am I under arrest?” and “Am I free to go?”\n 
DO NOT run away, or bad-mouth an officer.
    `,
    },
    {
      id: 4,
      type: 'If you have been detained by the police',
      description: `
Say you wish to remain silent and ask for a lawyer immediately. Don’t give any explanations or excuses. Don’t say anything, sign anything, or make any decisions without a lawyer.\n 
If you have been arrested by police, you have the right to make a local phone call. The police cannot listen if you call a lawyer. They can and often will listen to a call made to anyone else.
    `,
    },
    {
      id: 5,
      type: 'If your rights were violated',
      description: `
Write down everything you remember, including officers’ badges and patrol car numbers, which agency the officers were from, and any other details. Get contact information for witnesses.\n 
If you’re injured, seek medical attention immediately and take photographs of your injuries.\n 
File a written complaint with the agency’s internal affairs division or civilian complaint board. In most cases, you can file a complaint anonymously if you wish.
    `,
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      right: new FormControl('', Validators.required),
    });
  }
}
