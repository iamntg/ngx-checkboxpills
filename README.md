<h1 align="center">ngx-checkboxpills</h1> 
<p align="center">pills type checkbox groups with customizable functionalites</p>

## Install from NPM

```bash
npm install ngx-checkboxpills --save
```

## Example Usage

#### 1. Import it in the Module

Import the `CheckboxPillModule` in the AppModule or the Module in which you want to have this control.

```bash
import { CheckboxPillModule } from 'ngx-checkboxpills';
```


#### 2. Define the array to display in the Component

Define the input array in the component.ts file

```bash

export class SuperHeroComponent {
    superHeroList: any;  //input array
    ntgUniverse = {
      superHeros: [],  // selected output array
      galaxies: [],
      planets: []
    }
    
    constructor() {

        this.superHeroList = [
        {
          '_id': 1002,
          'heroName': 'Batman'
        },
        {
          '_id': 1003,
          'heroName': 'The Flash'
        },
        
        .....
        
        {
          '_id': 1008,
          'heroName': 'Iron Man'
        }];

    }
    
    //output event
    selectedSuperHeros(superHeroArray) {
        console.log("superHeroArray ", superHeroArray);
        //do whatever you want to alter the output
    }
}

```


#### 3. Use it in the Template

Use the `app-checkbox-pill` in the Template or TemplateUrl in the component.

```bash

<app-checkbox-pill
      (pillsSelectedChange)="selectedSuperHeros($event)" 
      [pillIdVariable]="'_id'" [pillTextVariable]="'heroName'" 
      [inputArray]="superHeroList" [(pillsSelected)]="ntgUniverse.superHeros" 
      [activePillBGColor]="'#712626'" [activePillFontColor]="'#fff'">
</app-checkbox-pill>

```

