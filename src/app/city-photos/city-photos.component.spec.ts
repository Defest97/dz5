import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPhotosComponent } from './city-photos.component';

describe('CityPhotosComponent', () => {
  let component: CityPhotosComponent;
  let fixture: ComponentFixture<CityPhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityPhotosComponent]
    });
    fixture = TestBed.createComponent(CityPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
