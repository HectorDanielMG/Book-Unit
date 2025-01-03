import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialExtravioComponent } from './historial-extravio.component';

describe('HistorialExtravioComponent', () => {
  let component: HistorialExtravioComponent;
  let fixture: ComponentFixture<HistorialExtravioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialExtravioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialExtravioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
