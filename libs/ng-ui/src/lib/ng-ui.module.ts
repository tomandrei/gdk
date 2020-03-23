import { CommonModule, DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, NgZone } from '@angular/core';

import { GdkComponent } from './ng-ui';
import { initialize } from './initialize';

const DIRECTIVES = [ GdkComponent ];

@NgModule({
  imports: [CommonModule],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class AngularLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularLibModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: initialize,
          multi: true,
          deps: [DOCUMENT, NgZone]
        }
      ]
    };
  }
}
