import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PersonData } from '../work1.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges {
  
  @Input() personData : PersonData = {
    name: "",
    isStudent: false,
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: 23505-1337,
    },
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
