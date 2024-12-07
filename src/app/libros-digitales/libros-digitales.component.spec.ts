import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosDigitalesComponent } from './libros-digitales.component';

describe('LibrosDigitalesComponent', () => {
  let component: LibrosDigitalesComponent;
  let fixture: ComponentFixture<LibrosDigitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosDigitalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosDigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
