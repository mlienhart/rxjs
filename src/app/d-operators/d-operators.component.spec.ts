import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOperatorsComponent } from './d-operators.component';

describe('DOperatorsComponent', () => {
  let component: DOperatorsComponent;
  let fixture: ComponentFixture<DOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
