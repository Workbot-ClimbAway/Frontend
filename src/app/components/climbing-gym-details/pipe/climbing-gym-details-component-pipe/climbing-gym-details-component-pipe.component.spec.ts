import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingGymDetailsComponentPipeComponent } from './climbing-gym-details-component-pipe.component';

describe('ClimbingGymDetailsComponentPipeComponent', () => {
  let component: ClimbingGymDetailsComponentPipeComponent;
  let fixture: ComponentFixture<ClimbingGymDetailsComponentPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbingGymDetailsComponentPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimbingGymDetailsComponentPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
