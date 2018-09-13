import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuCtrComponent } from './stu-ctr.component';

describe('StuCtrComponent', () => {
  let component: StuCtrComponent;
  let fixture: ComponentFixture<StuCtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuCtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
