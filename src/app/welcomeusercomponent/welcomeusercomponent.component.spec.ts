import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeusercomponentComponent } from './welcomeusercomponent.component';

describe('WelcomeusercomponentComponent', () => {
  let component: WelcomeusercomponentComponent;
  let fixture: ComponentFixture<WelcomeusercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeusercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeusercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
