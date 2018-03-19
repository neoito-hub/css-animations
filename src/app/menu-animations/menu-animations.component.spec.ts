import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAnimationsComponent } from './menu-animations.component';

describe('MenuAnimationsComponent', () => {
  let component: MenuAnimationsComponent;
  let fixture: ComponentFixture<MenuAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
