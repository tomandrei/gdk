import { async, TestBed } from '@angular/core/testing';
import { NgUiModule } from './ng-ui.module';

describe('NgUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgUiModule).toBeDefined();
  });
});
