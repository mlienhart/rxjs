import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETapComponent } from './e-tap.component';

describe('ETapComponent', () => {
  let component: ETapComponent;
  let fixture: ComponentFixture<ETapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ETapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
