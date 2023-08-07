import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAnotherMonumentsComponent } from './city-another-monuments.component';

describe('CityAnotherMonumentsComponent', () => {
  let component: CityAnotherMonumentsComponent;
  let fixture: ComponentFixture<CityAnotherMonumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityAnotherMonumentsComponent]
    });
    fixture = TestBed.createComponent(CityAnotherMonumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
