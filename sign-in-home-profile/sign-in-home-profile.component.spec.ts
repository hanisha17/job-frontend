import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInHomeProfileComponent } from './sign-in-home-profile.component';

describe('SignInHomeProfileComponent', () => {
  let component: SignInHomeProfileComponent;
  let fixture: ComponentFixture<SignInHomeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInHomeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInHomeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
