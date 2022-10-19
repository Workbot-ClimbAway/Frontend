import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPositiveResponseComponent } from './register-positive-response.component';

describe('RegisterPositiveResponseComponent', () => {
  let component: RegisterPositiveResponseComponent;
  let fixture: ComponentFixture<RegisterPositiveResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPositiveResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPositiveResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
