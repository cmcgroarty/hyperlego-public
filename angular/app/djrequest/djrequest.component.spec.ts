import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DJRequestComponent } from './djrequest.component';

describe('DJRequestComponent', () => {
  let component: DJRequestComponent;
  let fixture: ComponentFixture<DJRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DJRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DJRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
