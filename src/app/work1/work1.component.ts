import { Component } from '@angular/core';
import { PersonData } from './work1.interface';

@Component({
  selector: 'app-work1',
  templateUrl: './work1.component.html',
  styleUrls: ['./work1.component.scss']
})
export class Work1Component {
  title = 'angular-tutor';

  personData : PersonData= {
    name: "Dennis Schulist",
    isStudent: false,
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: 23505-1337,
    },
  }

  ChangeStatus(){
    if (this.personData.isStudent){
      this.personData.isStudent = false;
    } else {
      this.personData.isStudent = true;
    }
  }
}
