import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './ng-ui';

@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
  exports: [MyComponent]
})
export class NgUiModule {}
