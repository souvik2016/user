import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlogincomponentComponent } from './userlogincomponent.component';

describe('UserlogincomponentComponent', () => {
  let component: UserlogincomponentComponent;
  let fixture: ComponentFixture<UserlogincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlogincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlogincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
