import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bloc } from './bloc.component';


    

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bloc,],
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
  template : `
    
    <img src="/Bienvenue.png" alt="Bienvenue sur mon site" class="center"> 
    <div class="centered-row">
      <div class = "column">
        <img src="/horriblecochon.jpg" alt="cochonquifume"  class="side-image"/>
      </div>
      <div class = "column">
        <AboutMe [clickable]="true"/>
      </div>
      <div class = "column">  
        <img src="/gaymarx.jpg" alt="marx" class="side-image"/>
      </div>
    </div>
    `,
})
export class AppComponent {
  title = 'turbodimitri';
}
