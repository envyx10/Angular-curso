import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero', // Este será el selector que contiene la logica y gracias a el se verá en el navegador
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = "Spiderman";
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return`${ this.name } - ${ this.age }`;
  }

  changeHero():void{
    this.name = "pepe";
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name ="ironman";
    this.age = 45;

    /*
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML ='<h1>Desde Angular</h1>'
    });
   */

  }

  
}
