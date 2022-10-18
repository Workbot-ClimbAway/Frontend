import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleagueComponent } from './newleague.component';

describe('NewleagueComponent', () => {
  let component: NewleagueComponent;
  let fixture: ComponentFixture<NewleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewleagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
