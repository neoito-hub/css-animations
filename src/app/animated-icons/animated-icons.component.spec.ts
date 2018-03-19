import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedIconsComponent } from './animated-icons.component';

describe('AnimatedIconsComponent', () => {
  let component: AnimatedIconsComponent;
  let fixture: ComponentFixture<AnimatedIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
