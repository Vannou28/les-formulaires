import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponentChal15Component } from './user-component-chal15.component';

describe('UserComponentChal15Component', () => {
  let component: UserComponentChal15Component;
  let fixture: ComponentFixture<UserComponentChal15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponentChal15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponentChal15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
