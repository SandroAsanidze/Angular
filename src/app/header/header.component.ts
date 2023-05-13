import { Component } from '@angular/core';
import { NavMenu } from './nav.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navigation: NavMenu[] = [
    {
      path:'/',
      name:'Main'
    },
    {
      path:'personal-info',
      name:'Personal Info'
    },
    {
      path:'even-odd',
      name:'Even/Odd'
    },
    {
      path:'form',
      name:'Form'
    }
  ]
}
