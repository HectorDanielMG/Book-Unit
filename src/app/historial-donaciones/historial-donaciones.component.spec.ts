import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDonacionesComponent } from './historial-donaciones.component';

describe('HistorialDonacionesComponent', () => {
  let component: HistorialDonacionesComponent;
  let fixture: ComponentFixture<HistorialDonacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialDonacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
