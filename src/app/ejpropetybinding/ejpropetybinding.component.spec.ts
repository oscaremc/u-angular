import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjpropetybindingComponent } from './ejpropetybinding.component';

describe('EjpropetybindingComponent', () => {
  let component: EjpropetybindingComponent;
  let fixture: ComponentFixture<EjpropetybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjpropetybindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjpropetybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
