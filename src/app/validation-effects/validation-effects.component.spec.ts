import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationEffectsComponent } from './validation-effects.component';

describe('ValidationEffectsComponent', () => {
  let component: ValidationEffectsComponent;
  let fixture: ComponentFixture<ValidationEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
