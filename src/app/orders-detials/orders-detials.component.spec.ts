import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetialsComponent } from './orders-detials.component';

describe('OrdersDetialsComponent', () => {
  let component: OrdersDetialsComponent;
  let fixture: ComponentFixture<OrdersDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
