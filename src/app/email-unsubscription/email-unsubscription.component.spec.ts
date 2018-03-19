import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailUnsubscriptionComponent } from './email-unsubscription.component';

describe('EmailUnsubscriptionComponent', () => {
  let component: EmailUnsubscriptionComponent;
  let fixture: ComponentFixture<EmailUnsubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailUnsubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailUnsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
