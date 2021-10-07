import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBackpressureComponent } from './f-backpressure.component';

describe('FBackpressureComponent', () => {
  let component: FBackpressureComponent;
  let fixture: ComponentFixture<FBackpressureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FBackpressureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FBackpressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
