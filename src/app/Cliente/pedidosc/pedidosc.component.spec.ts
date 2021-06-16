import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoscComponent } from './pedidosc.component';

describe('PedidoscComponent', () => {
  let component: PedidoscComponent;
  let fixture: ComponentFixture<PedidoscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
