import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLibrosDigitalesComponent } from './formulario-libros-digitales.component';

describe('FormularioLibrosDigitalesComponent', () => {
  let component: FormularioLibrosDigitalesComponent;
  let fixture: ComponentFixture<FormularioLibrosDigitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioLibrosDigitalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioLibrosDigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
