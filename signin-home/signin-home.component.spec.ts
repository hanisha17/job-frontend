import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninHomeComponent } from './signin-home.component';

describe('SigninHomeComponent', () => {
  let component: SigninHomeComponent;
  let fixture: ComponentFixture<SigninHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
