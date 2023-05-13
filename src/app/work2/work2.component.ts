import { Component } from '@angular/core';
import { Integers } from './work2.interface';

@Component({
  selector: 'app-work2',
  templateUrl: './work2.component.html',
  styleUrls: ['./work2.component.scss']
})
export class Work2Component {
  integers: Integers[] = []
  constructor(){
    this.integers = [
      {
        num:Math.round(Math.random() * 100),
      },
      {
        num:Math.round(Math.random() * 100),
      },
      {
        num:Math.round(Math.random() * 100),
      },
      {
        num:Math.round(Math.random() * 100),
      },
      {
        num:Math.round(Math.random() * 100),
      },
      {
        num:Math.round(Math.random() * 100),
      },
      {
        num:Math.round(Math.random() * 100),
      },
      {
        num:Math.round(Math.random() * 100),
      }
    ]
  }

  Checknums(num:number) {
    if (num % 2 == 0) {
      return 'Even';
    }
    else{
      return 'Odd';
    }
  }
}
