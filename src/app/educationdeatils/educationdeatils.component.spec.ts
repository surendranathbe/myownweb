import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationdeatilsComponent } from './educationdeatils.component';

describe('EducationdeatilsComponent', () => {
  let component: EducationdeatilsComponent;
  let fixture: ComponentFixture<EducationdeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationdeatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
