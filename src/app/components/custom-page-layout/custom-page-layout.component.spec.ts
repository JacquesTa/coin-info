import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPageLayoutComponent } from './custom-page-layout.component';

describe('CustomPageLayoutComponent', () => {
  let component: CustomPageLayoutComponent;
  let fixture: ComponentFixture<CustomPageLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPageLayoutComponent]
    });
    fixture = TestBed.createComponent(CustomPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
