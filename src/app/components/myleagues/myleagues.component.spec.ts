import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleaguesComponent } from './myleagues.component';

describe('MyleaguesComponent', () => {
  let component: MyleaguesComponent;
  let fixture: ComponentFixture<MyleaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyleaguesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
