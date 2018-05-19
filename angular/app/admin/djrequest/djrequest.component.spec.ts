import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjrequestComponent } from './djrequest.component';

describe('DjrequestComponent', () => {
  let component: DjrequestComponent;
  let fixture: ComponentFixture<DjrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
