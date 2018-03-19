import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverEffectsComponent } from './hover-effects.component';

describe('HoverEffectsComponent', () => {
  let component: HoverEffectsComponent;
  let fixture: ComponentFixture<HoverEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
