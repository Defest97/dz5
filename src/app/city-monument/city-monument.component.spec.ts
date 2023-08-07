import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityMonumentComponent } from './city-monument.component';

describe('CityMonumentComponent', () => {
  let component: CityMonumentComponent;
  let fixture: ComponentFixture<CityMonumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityMonumentComponent]
    });
    fixture = TestBed.createComponent(CityMonumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
