import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDataComponent } from './listing-data.component';

describe('ListingDataComponent', () => {
  let component: ListingDataComponent;
  let fixture: ComponentFixture<ListingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
