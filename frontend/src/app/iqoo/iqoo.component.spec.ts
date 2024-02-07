import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqooComponent } from './iqoo.component';

describe('IqooComponent', () => {
  let component: IqooComponent;
  let fixture: ComponentFixture<IqooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IqooComponent]
    });
    fixture = TestBed.createComponent(IqooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
