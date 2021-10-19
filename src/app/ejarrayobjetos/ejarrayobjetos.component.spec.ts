import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjarrayobjetosComponent } from './ejarrayobjetos.component';

describe('EjarrayobjetosComponent', () => {
  let component: EjarrayobjetosComponent;
  let fixture: ComponentFixture<EjarrayobjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjarrayobjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjarrayobjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
