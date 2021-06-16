import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCComponent } from './ingresar-c.component';

describe('IngresarCComponent', () => {
  let component: IngresarCComponent;
  let fixture: ComponentFixture<IngresarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
