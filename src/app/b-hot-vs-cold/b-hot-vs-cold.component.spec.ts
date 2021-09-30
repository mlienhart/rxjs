import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BHotVsColdComponent } from './b-hot-vs-cold.component';

describe('BHotVsColdComponent', () => {
  let component: BHotVsColdComponent;
  let fixture: ComponentFixture<BHotVsColdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BHotVsColdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BHotVsColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
