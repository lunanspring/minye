import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCtrComponent } from './button-ctr.component';

describe('ButtonCtrComponent', () => {
  let component: ButtonCtrComponent;
  let fixture: ComponentFixture<ButtonCtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
