import { Component } from '@angular/core';
import { userData } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'randomuser';
 userDetails = userData;


}


