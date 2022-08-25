import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpaymentComponent } from './getpayment.component';

describe('GetpaymentComponent', () => {
  let component: GetpaymentComponent;
  let fixture: ComponentFixture<GetpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
