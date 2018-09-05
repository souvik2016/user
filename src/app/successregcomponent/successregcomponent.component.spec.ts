import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessregcomponentComponent } from './successregcomponent.component';

describe('SuccessregcomponentComponent', () => {
  let component: SuccessregcomponentComponent;
  let fixture: ComponentFixture<SuccessregcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessregcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessregcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
