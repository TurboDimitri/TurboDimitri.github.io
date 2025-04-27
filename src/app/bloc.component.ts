import { Component } from '@angular/core';
import { ClickableDirective } from './clickable.directive';
import { CommonModule } from '@angular/common';

@Component({
    selector:'AboutMe',
    standalone: true,
    imports: [CommonModule, ClickableDirective],
    template: `
    <div class="wrppaer">
      <div style="text-align: center;margin: -25px -50px 0;">
          Passionné d'informatique et toujours entrain d'apprendre de nouvelles choses <br/><br/>
          Cliquez pour accéder à mon CV
      </div>    
    </div>
  `,
  hostDirectives: [
    {
      directive: ClickableDirective, // <-- magic
      inputs: ['clickable'],
      outputs: ['itemClicked'],
    },
  ],
  styles: `
  :host {
    .wrppaer { 
      padding: 70px; // a l'intérieur de l'élément
      display: inline-grid; //manière de les mettre à la suite 
      place-content: center;
      border: 3px solid black;
      margin-left: auto;
      margin-right: auto;
      border-radius: 125px; // bords arrondis
      margin-bottom: 5px;
      width: 350px;
      height: 200px;
    }
  }
`,
})
export class Bloc {}