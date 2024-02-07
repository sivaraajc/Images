import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpostComponent } from './adminpost.component';

describe('AdminpostComponent', () => {
  let component: AdminpostComponent;
  let fixture: ComponentFixture<AdminpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpostComponent]
    });
    fixture = TestBed.createComponent(AdminpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
