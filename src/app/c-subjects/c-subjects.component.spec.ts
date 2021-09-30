import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSubjectsComponent } from './c-subjects.component';

describe('CSubjectsComponent', () => {
  let component: CSubjectsComponent;
  let fixture: ComponentFixture<CSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
