import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregistrationcompenentComponent } from './userregistrationcompenent.component';

describe('UserregistrationcompenentComponent', () => {
  let component: UserregistrationcompenentComponent;
  let fixture: ComponentFixture<UserregistrationcompenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserregistrationcompenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregistrationcompenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
