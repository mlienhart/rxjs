import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GSwitchMapComponent } from './g-switch-map.component';

describe('GSwitchMapComponent', () => {
  let component: GSwitchMapComponent;
  let fixture: ComponentFixture<GSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GSwitchMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
