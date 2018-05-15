import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTableDisplayComponent } from './score-table-display.component';

describe('ScoreTableDisplayComponent', () => {
  let component: ScoreTableDisplayComponent;
  let fixture: ComponentFixture<ScoreTableDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreTableDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreTableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
