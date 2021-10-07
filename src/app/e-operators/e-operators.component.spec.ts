import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOperatorsComponent } from './e-operators.component';

describe('EOperatorsComponent', () => {
  let component: EOperatorsComponent;
  let fixture: ComponentFixture<EOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
