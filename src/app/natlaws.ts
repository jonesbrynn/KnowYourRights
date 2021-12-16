import { NatLaw } from './natlaw';

export const NATLAWS: NatLaw[] = [
  {
    id: 1,
    header: 'Hit and Run',
    description: `Under Louisiana driving law, if you are involved in or cause an accident, you are required by law to stop, identify yourself and render reasonable aid. Failure to do so may result in a fine and time in jail.
    `,
  },
  {
    id: 2,
    header: 'Flight from Officer',
    description: `Under Louisiana driving law, a motor vehicle driver who refuses to stop, knowing a police officer has given a signal for him to stop, has committed a crime punishable by a fine and time in jail.
    `,
  },
  {
    id: 3,
    header: 'The Police have the right to:',
    description: `Ask for your legal documentation (driver’s license, proof of insurance, vehicle registration)\n
Search your car (the officer has probable cause, believes you could be hiding a weapon, drugs, or drug paraphernalia, with a valid search warrant, or if you have given consent)\n
Conduct a breathalyzer test if they are reasonable suspicious you have been driving under the influence of alcohol or might be suspect for a DWI in Louisiana\n 
Ask you to step out of your vehicle (do not get out of your car unless asked)
    `,
  },
  {
    id: 4,
    header: 'The Police Do Not Have The Right to:',
    description: `Refuse to show their name, ID, or badge number\n 
Search your vehicle without consent, a valid search warrant, reasonable suspicion, and/or probable cause\n
Arrest you for refusing to consent to a search
    `,
  },
  {
    id: 5,
    header: 'You have the right to:',
    description: `If you are stopped by a police officer in plain clothes, you can ask for proper identification\n 
If you do not understand why you have been pulled over or the answer given to you was vague, you can ask for clarification\n 
If you pulled over in a dimly-lit, abandoned, or seemingly unsafe area, you can ask the police officer to move to an area with better lighting or that is more populated\n 
If the police officer asks you to step out of your car so they may search it, they must have probable cause. You cannot say no to a search but you can say “I do not consent to this search,” so it is known and can be used in your defense later if needed\n 
If you are arrested, you have the right to remain silent and to wait to answer any questions until you have legal representation on your side
    `,
  },
  {
    id: 6,
    header: 'You do not have the right to:',
    description: `Refuse to show your driver’s license, proof of insurance, or registration\n 
Refuse to step out of your car after being asked to\n 
Physically stop a police officer from searching your car, even if you verbally declined consent to the search
    `,
  },
];
