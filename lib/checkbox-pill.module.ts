import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckboxPillComponent } from './checkbox-pill.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CheckboxPillComponent],
  exports: [CheckboxPillComponent]
})

export class CheckboxPillModule { }
