import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMatchToolbarComponent } from './current-match-toolbar.component';

describe('CurrentMatchToolbarComponent', () => {
  let component: CurrentMatchToolbarComponent;
  let fixture: ComponentFixture<CurrentMatchToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMatchToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMatchToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
